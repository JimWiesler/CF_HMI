var os = require('os');
var net = require("net");
var repl = require("repl");
var ADSAdapter = require('./ADSAdapter.js');
var w = require('./WebServer.js');

//Start the ADS connection
var ads = new ADSAdapter.ADS({name: "CF314", id: '5.31.160.194.1.1', 
                              port: 851, updateMS: 100, heartbeatVariable: "main.heartbeat"});
// var ads = new ADSAdapter.ADS({name: "CF314", id: '5.31.160.194.1.1', port: 999, updateMS: 100});
ads.start();

//Start web server
var http = new w.WebServer(8000,__dirname+'/web');

//Create socket.io handlers
http.io.on('connection', function (socket) {
   socket.on('ADSSubscribe', function(tags) {
      ads.subscribe(tags);
   });
   socket.on('ADSUpdateAll', function() {
      http.io.emit('ADSUpdates', ads.subscribed);
   });
   socket.on('ADSWrite', function(tags) {
      ads.write(tags);
   });
});

//Create ADS event handlers
ads.on('Updates', function(updates) {
   http.io.emit('ADSUpdates', updates);
});

//Create a remote node REPL instance so you can telnet directly to this server
net.createServer(function (socket) {
  var remote = repl.start("CF::remote> ", socket);
  //Adding objects to the remote REPL's context.
  remote.context.ads = ads;
  remote.context.http = http;
}).listen(5001);

console.log("Remote REPL started on port 5001.");

//A "local" node repl with a custom prompt
var local = repl.start("CF::local> ");

//Adding objects to the local REPL's context.
local.context.ads = ads;
local.context.http = http;
