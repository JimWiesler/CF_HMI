var util = require("util");
var events = require("events");
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");

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
}
util.inherits(ADS, events.EventEmitter);

//*******************************************
// Start method
//*******************************************
ADS.prototype.start = function() {
   try {
      TwinCAT.OpenCommunicationPort(this.CONTROLLER_NET_ID, this.CONTROLLER_ADS_PORT);
   } catch(err) {
      console.log("Failed to open TwinCAT port: " + err);
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
      var t;
      while ((t = tags.pop()) !== undefined) {
         if (typeof this.subscribed[t] === 'undefined') { //tag has not already been subscribed
            this.subscribed[t] = {value: null, ts: null};
            TwinCAT.SubscribeToVariable(t, this.subscribeCallback, {ads: this}, this.updateMS);
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

