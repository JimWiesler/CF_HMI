var os = require('os');
var net = require("net");
var repl = require("repl");
var ADSAdapter = require('./ADSAdapter.js');
var w = require('./WebServer.js');

//Start the ADS connection
var ads = new ADSAdapter.ADS({name: "CF314", id: '5.31.160.194.1.1', port: 851, updateMS: 100});
ads.start();

//Create ADS event handlers
ads.on('Updates', function(updates) {
   console.log('ADSUpdates', updates);
});

setInterval(readHeartbeat, 1000);



//A "local" node repl with a custom prompt
var local = repl.start("CF::local> ");

//Adding objects to the local REPL's context.
local.context.ads = ads;

var lastHeartbeat = -1, adsPortOpen;
function readHeartbeat() {
   try {
      var res = ads.read("main.heartbeat");
      if ((typeof res[0].value !== 'object') && (res[0].value !== lastHeartbeat) && res[0].value > 10000) {
         if (!adsPortOpen) {
            console.log("**ADS Port opened at "+(new Date()).toISOString());
            adsPortOpen = true;
         }
      } else {
          if (adsPortOpen) {
            console.log("ADS Port closed at "+(new Date()).toISOString());
            adsPortOpen = false;
         }
      }
      if (typeof res[0].value !== 'object') {
         lastHeartbeat = res[0].value;
      }
   } catch (e) {
     console.log(e, " read heartbeat failed") ;
   }
  //console.log('read heartbeat');
}