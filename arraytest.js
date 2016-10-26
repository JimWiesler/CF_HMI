var CONTROLLER_NET_ID = '5.31.160.194.1.1';
var CONTROLLER_ADS_PORT = 851;
var FIRST_UPDATE = true;
var READY = false;
var LOGACTIVE = false;  // toggled by PLC to enable/disable logging to Cassandra

var prompt = require('prompt');
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");

TwinCAT.OpenCommunicationPort(CONTROLLER_NET_ID, CONTROLLER_ADS_PORT);
TwinCAT.SubscribeToVariable("MAIN.logActive", function(args) {LOGACTIVE = args.value;}, {}, 1);

var arrayArgs = {"name":"MAIN.fbWT9999Clog.nLogJSTime","value":1470764939700,
            "ts":1470764939700,"user":{"arr":"MAIN.fbWT9999Clog.afLog","name":"MTWeight.pv"}};
var logged = TwinCAT.ReadArray(arrayArgs.user.arr);
console.log(logged);

var date_string, jsTime;
var sample_rate_ms = parseInt(1000 / logged.length);
console.log("sample rate %d",sample_rate_ms)

for (var i = 0; i < logged.length; i++)
{
  console.log(i, typeof i);
  jsTime = arrayArgs.value - 1000 + (i + 1) * sample_rate_ms;
  date_string = (new Date(jsTime)).toISOString().substr(0,10);
  console.log("  Time: %d, Date: %s, i: %d, valus: %f",jsTime, date_string, i, logged[i]);
}
    












