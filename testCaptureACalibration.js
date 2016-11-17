var CONTROLLER_NET_ID = '5.31.160.194.1.1';
var CONTROLLER_ADS_PORT = 851;
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");
TwinCAT.OpenCommunicationPort(CONTROLLER_NET_ID, CONTROLLER_ADS_PORT);

var results = [
  {address: 'Main.FT9999A_FLOWCAL.startTimes'    , key: 'start'},
  {address: 'Main.FT9999A_FLOWCAL.endTimes'      , key: 'end'}, 
  {address: 'Main.FT9999A_FLOWCAL.sp'            , key: 'SpeedA'}, 
  {address: 'Main.FT9999A_FLOWCAL.flowTotal'     , key: 'FQA'},
  {address: 'Main.FT9999A_FLOWCAL.weight'        , key: 'weight'}, 
  {address: 'Main.FT9999A_FLOWCAL.flowRate'      , key: 'FTA'},
  {address: 'Main.FT9999A_FLOWCAL.scaleRate'     , key: 'WTA'}
];

for (var i = 0; i < results.length; i++) {
  results[i].values = TwinCAT.ReadArray(results[i].address);
}


setTimeout(dumpResults, 100);

function dumpResults() {
  var out;
  var data = [];
  for (var i = 0; i < 24; i++) {
    out = {};
    for (var j = 0; j < results.length; j++) {
      out[results[j].key] = results[j].values[i];
    }
    out.startDate = new Date(out.start);
    out.endDate = new Date(out.end);
    data.push(out);
  }
  console.log(JSON.stringify(data));
}
