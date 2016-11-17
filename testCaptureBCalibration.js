var CONTROLLER_NET_ID = '5.31.160.194.1.1';
var CONTROLLER_ADS_PORT = 851;
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");
TwinCAT.OpenCommunicationPort(CONTROLLER_NET_ID, CONTROLLER_ADS_PORT);

var results = [
  {address: 'Main.FT9999B_FLOWCAL.startTimes'    , key: 'start'},
  {address: 'Main.FT9999B_FLOWCAL.endTimes'      , key: 'end'}, 
  {address: 'Main.FT9999B_FLOWCAL.sp'            , key: 'SpeedB'}, 
  {address: 'Main.FT9999B_FLOWCAL.flowTotal'     , key: 'FQA'},
  {address: 'Main.FT9999B_FLOWCAL.weight'        , key: 'weight'}, 
  {address: 'Main.FT9999B_FLOWCAL.flowRate'      , key: 'FTB'},
  {address: 'Main.FT9999B_FLOWCAL.scaleRate'     , key: 'WTB'}
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
