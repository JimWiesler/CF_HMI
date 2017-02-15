var util = require("util");
var events = require("events");
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");

/* Default init function that is called when module created */
// void init(Handle<Object> exports)
// {
	// NODE_SET_METHOD(exports, "OpenCommunicationPort", OpenCommunicationPort);
	// NODE_SET_METHOD(exports, "CloseCommunicationPort", CloseCommunicationPort);
	// NODE_SET_METHOD(exports, "StartPLC", StartPLC);
	// NODE_SET_METHOD(exports, "StopPLC", StopPLC);
	// NODE_SET_METHOD(exports, "ReadValue", ReadVariableByName);
	// NODE_SET_METHOD(exports, "ReadArray", ReadArrayByName);
	// NODE_SET_METHOD(exports, "WriteValue", WriteValueToVariable);
	// NODE_SET_METHOD(exports, "BrowseVariables", BrowseVariables);
	// NODE_SET_METHOD(exports, "SubscribeToVariable", SubscribeToVariable);
	// NODE_SET_METHOD(exports, "UnsubscribeFromVariable", UnsubscribeFromVariable);
	// NODE_SET_METHOD(exports, "SubscribeToStatusChangesPLC", SubscribeToStatusChangesPLC); // Start stop or run changes
	// NODE_SET_METHOD(exports, "SubscribeToStatusChangesRouter", SubscribeToStatusChangesRouter); //ADS router symbol table changes
	// NODE_SET_METHOD(exports, "SUCCESS", CheckIfSuccess);
	// NODE_SET_METHOD(exports, "ERROR", CheckIfError);
// }



//*******************************************
// ADS object - writes and monitors values in Beckhoff TwinCAT systems
//   Call with config object {name: name, id: TwinCATNetID, port: TwinCATPort}
//*******************************************
function ADS(config) {
   events.EventEmitter.call(this);
   this.name = config.name || 'Beckhoff';
   this.CONTROLLER_NET_ID = config.id || null;
   this.CONTROLLER_ADS_PORT = config.port || 851;
   this.subscribed = {};
   this.changed = {};
   this.updateMS = config.updateMS || 250; // MS between emitting the list of changed variable values, cuts down on bandwidth
   this.interval = null;
   this.updateInterval(this.updateMS);
   this.heartbeatVariable = config.heartbeatVariable || "";
   this.lastHeartbeat = -1;
   this.adsPortOpen = false;
}
util.inherits(ADS, events.EventEmitter);

//*******************************************
// Start method
//*******************************************
ADS.prototype.start = function() {
   try {
      var error = TwinCAT.OpenCommunicationPort(this.CONTROLLER_NET_ID, this.CONTROLLER_ADS_PORT);
      if (this.heartbeatVariable !== "") {
         var me = this;
         setInterval(function () {me.readHeartbeat(me);}, 1000);
      }
   } catch(err) {
      console.log("Failed to open TwinCAT port: " + err);
   }
};

//*******************************************
// Monitor method
//*******************************************
ADS.prototype.monitor = function() {
   try {
      var error = TwinCAT.MonitorCommunicationPort(function (args) {console.log('**callback Subscribe to Monitor**');console.dir(args);});
   } catch(err) {
      console.log("Failed to monitor TwinCAT port: " + err);
   }
};

//*******************************************
// Stop method
//*******************************************
ADS.prototype.stop = function() {
   try {
      TwinCAT.CloseCommunicationPort();
   } catch(err) {
      console.log("Failed to close TwinCAT port: " + err);
   }
};

//*******************************************
// Read method
//*******************************************
ADS.prototype.read = function(tags) {
   try {
      var error;
      if (!Array.isArray(tags)) {tags = [tags];}
      var t, results = [], r;
      while ((t = tags.pop()) !== undefined) {
         r = TwinCAT.ReadValue(t);
         results.push({tag: t, value: r})
      }
      return results;
   } catch(err) {
      console.log("Failed to read value via ADS : " + err);
   }
};

//*******************************************
// ReadArray method
//*******************************************
ADS.prototype.readArray = function(tags) {
   try {
      var error;
      if (!Array.isArray(tags)) {tags = [tags];}
      if (tags.length === 0) return;
      var t, results = [], r;
      for (var i = 0; i < tags.length; i++) {
         r = TwinCAT.ReadArray(tags[i]);
         results.push({tag: tags[i], value: r})
      }
      this.emit('ReadArray', results);
   } catch(err) {
      console.log("Failed to read array via ADS : " + err);
   }
};

//*******************************************
// Write method
//   Call with array of objects or single object in format {tag: 'POU.Variable', value: value}
//*******************************************
ADS.prototype.write = function(tags) {
   try {
      if (!Array.isArray(tags)) {tags = [tags];}
      var t;
      while ((t = tags.pop()) !== undefined) {
         TwinCAT.WriteValue(t.tag, t.value);
      }
   } catch(err) {
      console.log("Failed to write to ADS : " + err);
   }
};

//*******************************************
// Subscribe method
//   Call with single tag name or array of tag names in format ['POU.Variable', 'POU.Variable']
//   Subscribe cycle time is defaulted to current updateMS
//*******************************************
ADS.prototype.subscribe = function(tags) {
   try {
      if (!Array.isArray(tags)) {tags = [tags];}
      var t, result;
      while ((t = tags.pop()) !== undefined) {
         if (typeof this.subscribed[t] === 'undefined') { //tag has not already been subscribed
            this.subscribed[t] = {value: null, ts: null};
            result = TwinCAT.SubscribeToVariable(t, this.subscribeCallback, {ads: this}, this.updateMS);
            // console.log('*** Result of subscribe ****');
            // console.dir(result);            
         }
      }
   } catch(err) {
      console.log("Failed to subscribe to variable %s: Error %s", t, err);
   }
};

//*******************************************
// Subscribe Callback method
//   Note: subscribe callback function recieves a single argument object of the following form:
//      { name: 'MTSerial.nReceiveCounter',   -> name of the variable
//        value: 5644,         -> value of the variable - don't grab strings or structures!  Will crash...
//        ts: 1466595550752,   -> Javascript timestamp when the variable last changed
//        user: {} }           -> user object passed to the callback as the 3rd argument of SubscribeToVariable()
//*******************************************
ADS.prototype.subscribeCallback = function(arg) {
   try {
      var me = arg.user.ads;
      me.subscribed[arg.name].value = arg.value;
      me.subscribed[arg.name].ts = arg.ts;
      me.changed[arg.name] = {value: arg.value, ts: arg.ts};
   } catch(err) {
      console.log("Failed to update subscribed variable: " + err, arg);
   }
};

//*******************************************
// Resubscribe method
//   Resubscribe to variables in this.subscribed - need to do this when download has occurred
//*******************************************
ADS.prototype.resubscribe = function() {
   var result = TwinCAT.ResubscribeToVariables();
   // var tags = Object.keys(this.subscribed);
   // try {
      // var t, result;
      // while ((t = tags.pop()) !== undefined) {
         // result = TwinCAT.SubscribeToVariable(t, this.subscribeCallback, {ads: this}, this.updateMS);
      // }
   // } catch(err) {
      // console.log("Failed to resubscribe to variable %s: Error %s", tag.value, err);
   // }
};

//*******************************************
// Interval method
//   Call with single tag name or array of tag names in format ['POU.Variable', 'POU.Variable']
//*******************************************
ADS.prototype.updateInterval = function(ms) {
   var me = this;
   if (this.interval !== undefined) {
      clearInterval(this.interval);
   }
   this.interval = setInterval(function() {emitChanges(me);}, me.updateMS);
};

//*******************************************
// readHeartbeat method
//   Called every second to set status of this.adsPortOpen
//*******************************************
ADS.prototype.readHeartbeat = function(ads) {
   try {
      var res = ads.read(ads.heartbeatVariable);
      if ((typeof res[0].value !== 'object') && (res[0].value !== ads.lastHeartbeat) && res[0].value > 10000) {
         if (!ads.adsPortOpen) {
            console.log("*** ADS Communication Active: "+(new Date()).toISOString());
            ads.adsPortOpen = true;
            ads.resubscribe(); //resubscribe to ADS read variables
         }
      } else {
          if (ads.adsPortOpen) {
            console.log("*** ADS Communication Interrupted: "+(new Date()).toISOString());
            ads.adsPortOpen = false;
         }
      }
      if (typeof res[0].value !== 'object') {
         ads.lastHeartbeat = res[0].value;
      }
   } catch (e) {
     console.log(e, " read heartbeat failed") ;
   }
}

//*******************************************
// Function to emit changes object
//*******************************************
function emitChanges(o) {
   if (Object.keys(o.changed).length > 0) {
      o.emit('Updates', o.changed);
      o.changed = {};
   }
}

module.exports.ADS = ADS;

//*******************************************
// Commands for Testing 
//*******************************************
// var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");
// var id = '5.31.160.194.1.1';
// var port = 851;
// function cb(a) {console.log("cb:");console.dir(a);}
// TwinCAT.OpenCommunicationPort(id, port);
// TwinCAT.SubscribeToVariable('MTSerial.bStringReceived', cb, {jim: id});
// TwinCAT.SubscribeToVariable('MTSerial.nReceiveCounter', cb, {jim: id});

