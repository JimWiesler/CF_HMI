var CONTROLLER_NET_ID = '5.31.160.194.1.1';
var CONTROLLER_ADS_PORT = 851;
var TwinCAT = require("./ADSNode/TwinCAT_ADS_Node.node");
TwinCAT.OpenCommunicationPort(CONTROLLER_NET_ID, CONTROLLER_ADS_PORT);

var results = [
	{address: 'FlowCheck.startTimes'    , key: 'start'},
  {address: 'FlowCheck.endTimes'      , key: 'end'}, 
  {address: 'FlowCheck.spA'           , key: 'SpeedA'}, 
  {address: 'FlowCheck.spB'           , key: 'SpeedB'}, 
  {address: 'FlowCheck.FQA'           , key: 'FQA'},
  {address: 'FlowCheck.FQB'           , key: 'FQB'}, 
  {address: 'FlowCheck.FQC'           , key: 'FQC'}, 
  {address: 'FlowCheck.weight'        , key: 'weight'}, 
  {address: 'FlowCheck.FTA_mean'      , key: 'FTA'}, 
  {address: 'FlowCheck.FTB_mean'      , key: 'FTB'}, 
  {address: 'FlowCheck.FTC_mean'      , key: 'FTC'}, 
  {address: 'FlowCheck.P9999Atubing'  , key: 'APITube'}, 
  {address: 'FlowCheck.P9999Btubing'  , key: 'BuffTube'}
];

for (var i = 0; i < results.length; i++) {
  results[i].values = TwinCAT.ReadArray(results[i].address);
}


setTimeout(dumpResults, 100);

function dumpResults() {
  var out;
  var data = [];
  for (var i = 0; i < 50; i++) {
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
