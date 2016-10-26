var CONTROLLER_NET_ID = '5.31.160.194.1.1';
var CONTROLLER_ADS_PORT = 851;
var FIRST_UPDATE = true;
var READY = false;
var LOGACTIVE = false;  // toggled by PLC to enable/disable logging to Cassandra

var prompt = require('prompt');
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");

var cassandra, cass_client;
cassandra = require('cassandra-driver');
cass_client = new cassandra.Client({ contactPoints: ['POCLAINGDB01', 'POCLAINGDB02'], keyspace: 'contform'});
cass_client.connect(function(err, result) {
                console.log('<< Connected to Cassandra');
                READY = true;
});


// Used for confirming actions before doing anything harmful to the Database
function AreYouSure(func)
{
  prompt.start();
  prompt.message = '';
  prompt.delimiter = '';
  prompt.colors = false;
  prompt.get({
    properties: {
      // setup the dialog
      confirm: {
        // allow yes, no, y, n, YES, NO, Y, N as answer
        pattern: /^(yes|no|y|n)$/gi,
        description: 'Do you really know what you are doing?',
        message: 'Type yes/no',
        required: true,
        default: 'no'
      }
    }
  }, 
  function (err, result) {
    // transform to lower case
    var c = result.confirm.toLowerCase();
    // yes or y typed ? otherwise abort
    if (c!='y' && c!='yes'){
      console.log('ABORT');
      return;
    }
    // your code
    func();
  });
}

// CREATE the series_by_day Database inside the contform KEYSPACE
function CreateDb() {
  cass_client.execute("CREATE TABLE series_by_day(tag_id TEXT,date TEXT, event_time TIMESTAMP, value FLOAT, PRIMARY KEY((tag_id,date),event_time)) WITH CLUSTERING ORDER BY (event_time ASC) AND caching = '{\"keys\":\"ALL\", \"rows_per_partition\":\"10\"}';", {consistency: cassandra.types.consistencies.quorum}, function (err, result) {
    if (!err) {
      console.log('Table Created');
      console.log(result);
    }
    else {
      console.log(err);
    }
  });
}


// DROPS the series_by_day Database from the contform KEYSPACE
function DropDb(recreate) {
  cass_client.execute("DROP TABLE series_by_day;", {consistency: cassandra.types.consistencies.quorum}, function (err, result) {
    if (!err) {
      console.log('Table Deleted');
      console.log(result);
      if(recreate) CreateDb();
    } else {
      console.log(err);
    }
  });
}


// TRUNCATES the series_by_day Database
function ClearDb() {
  cass_client.execute("TRUNCATE series_by_day;", {consistency: cassandra.types.consistencies.quorum}, function (err, result) {
    if (!err) {
      console.log('Table Cleared');
      console.log(result);
    }
    else {
      console.log(err);
    }
  });
}


// Callback Function for Cassandra
function Callback_SendToCassandra(args) {
  if(args.value !== 0 && !FIRST_UPDATE && READY) {
    if(!LOGACTIVE) return;  // Make sure logging is enabled in the PLC
    
    // console.log('<< New Transfer at ' + (new Date(args.value)).toLocaleTimeString());
    console.log('<< New Transfer at ' + args.value);
    //console.log(JSON.stringify(args));
    //{"name":"MAIN.fbWT9999Clog.nLogJSTime","value":1470764939700,"ts":1470764939700,"user":{"arr":"MAIN.fbWT9999Clog.afLog","name":"MTWeight.pv"}}
    var logged = TwinCAT.ReadArray(args.user.arr);
    var date_string, jsTime;
    var sample_rate_ms = parseInt(1000 / logged.length);
    
    var queries = [];
    for (var i = 0; i < logged.length; i++)  {
      jsTime = parseInt(args.value) - 1000 + (i + 1) * sample_rate_ms;
      date_string = (new Date(jsTime)).toISOString().substr(0,10);
      queries.push({ query: 'INSERT INTO series_by_day (tag_id,date,event_time,value) VALUES (?,?,?,?)', 
          params: [args.user.name, date_string, jsTime,logged[i]]});
    }
    
    var queryOptions = { prepare: true, consistency: cassandra.types.consistencies.one };
    cass_client.batch(queries, queryOptions, function(err) {
      if (!err) {
        console.log('<< ' + args.user.name + ' data inserted [' + (parseInt(i)+1) + '] points');
      } else {
        console.log(err);
      }
    });
  }
  else {
    FIRST_UPDATE = false;
  }
}


// Subscribe to an fbDatalogger to collect data at a certain sample rate 
function SubscribeToFbDataLogger(datalogger, name) {
  TwinCAT.SubscribeToVariable(datalogger + ".nLogJSTime", Callback_SendToCassandra, {arr:datalogger + ".afLog",'name':name}, 1);
}


// Decide what to do based on arguments
switch(process.argv[2]) {
  // CREATE the TABLE series_by_day
  case "create":
                  AreYouSure(function() {CreateDb();});
    break;
  
  // DROP the TABLE series_by_day
  case "drop":
    AreYouSure(function() {DropDb(false);});
    break;
  
  // DROP the TABLE series_by_day then CREATE it back again
  case "recreate":
    AreYouSure(function() {DropDb(true);});
    break;
  
  // TRUNCATE the TABLE by clearing out all of the data
  case "clear":
    AreYouSure(function() {ClearDb();});
    break;
  
  // DEFAULT - run program that inserts data into Cassandra Cluster based on ADS subscription to Beckhoff PLC
  default:
    TwinCAT.OpenCommunicationPort(CONTROLLER_NET_ID, CONTROLLER_ADS_PORT);
    TwinCAT.SubscribeToVariable("MAIN.logActive", function(args) {LOGACTIVE = args.value;}, {}, 1);
    
    SubscribeToFbDataLogger("MAIN.fbP9999ARPMlog",'P9999A.fSpeedPV');
    SubscribeToFbDataLogger("MAIN.fbP9999AFlowlog",'P9999A.fFlowPV');
    SubscribeToFbDataLogger("MAIN.fbP9999BRPMlog",'P9999B.fSpeedPV');
    SubscribeToFbDataLogger("MAIN.fbP9999BFlowlog",'P9999B.fFlowPV');
    
    SubscribeToFbDataLogger("MAIN.fbFT9999Alog",'FT9999A.pv');
    SubscribeToFbDataLogger("MAIN.fbFT9999Blog",'FT9999B.pv');
    SubscribeToFbDataLogger("MAIN.fbFT9999Clog",'FT9999C.pv');
    SubscribeToFbDataLogger("MAIN.fbFT9999Cfqlog",'FT9999Cfq.pv');
    
    SubscribeToFbDataLogger("MAIN.fbFT9999Afiltlog",'FT9999A.pvfilt');
    SubscribeToFbDataLogger("MAIN.fbFT9999Bfiltlog",'FT9999B.pvfilt');
    SubscribeToFbDataLogger("MAIN.fbFT9999Cfiltlog",'FT9999C.pvfilt');
    
    SubscribeToFbDataLogger("MAIN.fbFQ9999Alog",'fbFQ9999A.total');
    SubscribeToFbDataLogger("MAIN.fbFQ9999Blog",'fbFQ9999B.total');
    SubscribeToFbDataLogger("MAIN.fbFQ9999Clog",'fbFQ9999C.total');
    
    SubscribeToFbDataLogger("MAIN.fbPT9999Alog",'PT9999A.pv');
    SubscribeToFbDataLogger("MAIN.fbPT9999Blog",'PT9999B.pv');
    SubscribeToFbDataLogger("MAIN.fbPT9999Clog",'PT9999C.pv');
    
    SubscribeToFbDataLogger("MAIN.fbWT9999Clog",'MTWeight.pv');
    
    SubscribeToFbDataLogger("MAIN.fbAT9999OPCONClog",'AT9999OPCONC.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999OP300log",'AT9999OP300.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999OP313log",'AT9999OP313.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999OPDIFFlog",'AT9999OPDIFF.pv');
    
    SubscribeToFbDataLogger("MAIN.fbAT9999RV290log",'AT9999RV290.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999RV300log",'AT9999RV300.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999RV310log",'AT9999RV310.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999RV320log",'AT9999RV320.pv');                           
    
    SubscribeToFbDataLogger("MAIN.fbAT9999CWxlog",'AT9999CWx.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999CWylog",'AT9999CWy.pv');
    SubscribeToFbDataLogger("MAIN.fbAT9999CWYYlog",'AT9999CWYY.pv');
                  
    break;
}

