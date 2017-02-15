var ctlValues = {
   read: {
      //**********P9999A******************
      "ST9999A_PV" : {src: {}, tag: "Main.P9999A.fSpeedPV"},
      "SC9999A_SP" : {src: {}, tag: "Main.P9999A.fSpeedSP"},
      "P9999A_RUN" : {src: {}, tag: "Main.P9999A.bRun"},
      "P9999A_LOCAL" : {src: {}, tag: "Main.P9999A.bLocal"},
      //**********P9999B******************
      "ST9999B_PV" : {src: {}, tag: "Main.P9999B.fSpeedPV"},
      "SC9999B_SP" : {src: {}, tag: "Main.P9999B.fSpeedSP"},
      "P9999B_RUN" : {src: {}, tag: "Main.P9999B.bRun"},
      "P9999B_LOCAL" : {src: {}, tag: "Main.P9999B.bLocal"},
      //**********FV9999C******************
      "FV9999C_PV" : {src: {}, tag: "Main.FV9999C.pv"},
      //**********Discrete Inputs******************
      "LSL9999C_PV" : {src: {}, tag: "Main.AC9999C.lsl"},
      "LSH9999C_PV" : {src: {}, tag: "Main.AC9999C.lsh"},
      //**********API meter******************
      "FT9999A_PV" : {src: {}, tag: "MAIN.FT9999A.pv"},
      "FT9999A_PVFilt" : {src: {}, tag: "MAIN.FT9999A.pvfilt"},
      "FQ9999A_total" : {src: {}, tag: "MAIN.fbFQ9999A.total"},
      "PT9999A_PV" : {src: {}, tag: "MAIN.PT9999A.pv"},
      
      "FC9999A_MODE" : {src: {}, tag: "MAIN.FC9999A.modeSP"},
      "FC9999A_SP" : {src: {}, tag: "MAIN.FC9999A.SP"},
      //**********Buffer meter******************
      "FT9999B_PV" : {src: {}, tag: "MAIN.FT9999B.pv"},
      "FT9999B_PVFilt" : {src: {}, tag: "MAIN.FT9999B.pvfilt"},
      "FQ9999B_total" : {src: {}, tag: "MAIN.fbFQ9999B.total"},
      "PT9999B_PV" : {src: {}, tag: "MAIN.PT9999B.pv"},
      "FC9999B_MODE" : {src: {}, tag: "MAIN.FC9999B.modeSP"},
      "FC9999B_SP" : {src: {}, tag: "MAIN.FC9999B.SP"},
      //**********Combined Flow meters******************
      "FT9999C_PV" : {src: {}, tag: "MAIN.FT9999C.pv"},
      "FT9999C_PVFilt" : {src: {}, tag: "MAIN.FT9999C.pvfilt"},
      "FQ9999C_total" : {src: {}, tag: "MAIN.fbFQ9999C.total"},
      "PT9999C_PV" : {src: {}, tag: "MAIN.PT9999C.pv"},
      "AQ9999C_total" : {src: {}, tag: "MAIN.AQ9999C"},
      //**********AC9999C Concentration Control******************
      "AC9999C_API_Concentration" : {src: {}, tag: "MAIN.AC9999C.API_Concentration"},
      "AC9999C_concSP" : {src: {}, tag: "MAIN.AC9999C.conc.sp"},
      "AC9999C_cSP" : {src: {}, tag: "MAIN.AC9999C.c.sp"},
      "AC9999C_MODE" : {src: {}, tag: "MAIN.AC9999C.mode"},
      "AC9999C_filling" : {src: {}, tag: "MAIN.AC9999C.filling"},
      "AC9999C_fillMODE" : {src: {}, tag: "MAIN.AC9999C.autoFill"},
      //**********FVC9999C Diverter Valve Control******************
      "FVC9999C_divert" : {src: {}, tag: "MAIN.FVC9999C.divert"},
      "FVC9999C_elementMass" : {src: {}, tag: "MAIN.FVC9999C.elementMass"},
      "FVC9999C_massBeforePAT" : {src: {}, tag: "MAIN.FVC9999C.massBeforePAT"},
      "FVC9999C_massBeforeDivert" : {src: {}, tag: "MAIN.FVC9999C.massBeforeDivert"},
      //**********Reveal******************
      "AT9999C_PV" : {src: {}, tag: "MAIN.AT9999C.pv"},
      //**********ColorWise******************
      "AT9999CW_X" : {src: {}, tag: "MAIN.AT9999CWX.pv"},
      "AT9999CW_Y" : {src: {}, tag: "MAIN.AT9999CWY.pv"},
      "AT9999CW_yy" : {src: {}, tag: "MAIN.AT9999CWyy.pv"},
      //**********Scale******************
      "WT9999C_PV" : {src: {}, tag: "MAIN.MTWeight.pv"},
      //**********Logging******************
      "logActive" : {src: {}, tag: "MAIN.logActive"}
   },
   write: {
      "SC9999A_SP" : {evt: 'ADSWrite', tag: "MAIN.P9999A.fSpeedSP_RQ", input: null},
      "FC9999A_MODE" : {evt: 'ADSWrite', tag: "MAIN.FC9999A.modeSP", input: null},
      "FC9999A_SP" : {evt: 'ADSWrite', tag: "MAIN.FC9999A.SP", input: null},
      "P9999A_Local_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nLocal_RQ"},
      "P9999A_Run_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nRun_RQ"},
      "P9999A_TubeSize" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nTubeSize"},
      "P9999A_Heads" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nHeads"},
      "SC9999B_SP" : {evt: 'ADSWrite', tag: "MAIN.P9999B.fSpeedSP_RQ", input: null},
      "FC9999B_MODE" : {evt: 'ADSWrite', tag: "MAIN.FC9999B.modeSP", input: null},
      "FC9999B_SP" : {evt: 'ADSWrite', tag: "MAIN.FC9999B.SP", input: null},
      "AC9999C_API_Concentration" : {evt: 'ADSWrite', tag: "MAIN.AC9999C.API_Concentration", input: null},
      "AC9999C_concSP" : {evt: 'ADSWrite', tag: "MAIN.AC9999C.conc.rq", input: null},
      "AC9999C_cSP" : {evt: 'ADSWrite', tag: "MAIN.AC9999C.c.rq", input: null},
      "AC9999C_MODE" : {evt: 'ADSWrite', tag: "MAIN.AC9999C.mode", input: null},
      "AC9999C_fillMODE" : {evt: 'ADSWrite', tag: "MAIN.AC9999C.autoFill", input: null},
      "P9999B_Local_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nLocal_RQ"},
      "P9999B_Run_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nRun_RQ"},
      "P9999B_TubeSize" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nTubeSize"},
      "P9999B_Heads" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nHeads"},
      "FQ9999A_Reset_RQ" : {evt: 'ADSWrite', tag: "MAIN.fbFQ9999A.resetRQ"},
      "FQ9999B_Reset_RQ" : {evt: 'ADSWrite', tag: "MAIN.fbFQ9999B.resetRQ"},
      "FQ9999C_Reset_RQ" : {evt: 'ADSWrite', tag: "MAIN.fbFQ9999C.resetRQ"},
      "FQ9999_MasterReset" : {evt: 'ADSWrite', tag: "MAIN.FQ9999_MasterReset"},
      "FV9999C" : {evt: 'ADSWrite', tag: "MAIN.FV9999C.sp"},
      "logActive_RQ" : {evt: 'ADSWrite', tag: "MAIN.logActive"}
   }
};
var adsReads = {};
var urlHost = window.location.host;
urlHost = urlHost.toLowerCase().replace('localhost','127.0.0.1');
var socket = io(urlHost); //set this to the ip address of your node.js server


//*************************************************
// angular controller
//*************************************************
var app = angular.module("myApp", []);
app.controller("CF_HMI", ['$scope', '$http', function($scope, $http) {
   //for debugging access to $scope:
   window.MYSCOPE = $scope;

   //get ip address from URL
   $scope.baseURL = location.href.substr(0,location.href.lastIndexOf('/')+1);
   
   $scope.cv = ctlValues;
   $scope.tubeSizes = [
      {name: '13 (0.8mm, 1/32")', value:13},
      {name: '13.5 (1.2mm, 3/64")', value:135},
      {name: '14 (1.6mm, 1/16")', value:14},
      {name: '16 (3.1mm, 1/8") ', value:16},
      {name: '25 (4.8mm, 3/16")', value:25},
      {name: '17 (6.4mm, 1/4") ', value:17},
      {name: '18 (7.9mm, 5/16")', value:18}
   ];
   
   $scope.headNumbers = [
      {name:'1 4-roller Head', value:1},
      {name:'2 4-roller Heads', value:2}
   ];
   
   $scope.arrayLookup  = function(arr, val) {
      return arr.find(function(o){return o.value == val;}).name;
   };

   $scope.values = {
      'P9999A_RUN' : {'false': 'Stopped', 'true': 'Running', value: false},
      'P9999A_LOCAL' : {'false': 'Remote', 'true': 'Local', value: true},
      'FC9999A_MODE' : {1: 'Manual', 2: 'Auto', value: 1},
      'FC9999A_SP' : {eu: 'g/min', value: 0.0},
      'P9999B_RUN' : {'false': 'Stopped', 'true': 'Running', value: false},
      'P9999B_LOCAL' : {'false': 'Remote', 'true': 'Local', value: true},
      'FC9999B_MODE' : {1: 'Manual', 2: 'Auto', value: 1},
      'FC9999B_SP' : {eu: 'g/min', value: 0.0},
      'AC9999C_MODE' : {0: 'Manual', 2: 'Auto', value: 0},
      'AC9999C_fillMODE' : {0: 'OFF', 1: 'ON', value: false},
      'FV9999C_PV' : {'false': 'Waste', 'true': 'Filler', value: false},
      'LSH9999C_PV' : {'false': 'OK', 'true': 'High', value: false},
      'LSL9999C_PV' : {'false': 'Low', 'true': 'OK', value: false},
      'FQ9999A_total' : {eu: 'g', value: 0.0},
      'FQ9999B_total' : {eu: 'g', value: 0.0},
      'FQ9999C_total' : {eu: 'g', value: 0.0},
      'AQ9999C_total' : {eu: 'mg/mL', value: 0.0},
      'FVC9999C_divert' : {'false': 'In Spec', 'true': 'Divert', value: true},
      'FVC9999C_elementMass' : {eu: 'g', value: 0.5, updatefn: function(o) {$scope.updateConcXAxis(o);}},
      'FVC9999C_massBeforePAT' : {eu: 'g', value: 23.0, updatefn: function(o) {$scope.updateConcXAxis(o);}},
      'FVC9999C_massBeforeDivert' : {eu: 'g', value: 31.0, updatefn: function(o) {$scope.updateConcXAxis(o);}},
      'AT9999CW_X' : {eu: 'X', value: 0.0, updatefn: function(o) {updateColor(o);}},
      'AT9999CW_Y' : {eu: 'Y', value: 0.0, updatefn: function(o) {updateColor(o);}},
      'AT9999CW_yy' : {eu: 'y', value: 0.0, updatefn: function(o) {updateColor(o);}}
   };
   
   //Arrays for concentration plot
   $scope.concXAxisValues = {start: 0, pointInterval: 0.5, patStart: 46, end: 62};
   $scope.rawConc = [];
   $scope.PATConc = [];
   $scope.PATstdev = [];
   $scope.elStatus = [];
   
   $scope.updateConcXAxis = function(o) {
      if (typeof o == "object") {o.tag.value = o.value;}
      $scope.concXAxisValues = {start: 0,
                                pointInterval: $scope.values.FVC9999C_elementMass.value, 
                                patStart: 1+parseInt($scope.values.FVC9999C_massBeforePAT.value/$scope.values.FVC9999C_elementMass.value), 
                                end: parseInt($scope.values.FVC9999C_massBeforeDivert.value/$scope.values.FVC9999C_elementMass.value)};
      if (typeof $scope.concChart == "object") {
         $scope.concChart.series[0].update({start: 0, pointInterval: $scope.values.FVC9999C_elementMass.value});
         $scope.concChart.series[1].update({start: $scope.values.FVC9999C_massBeforePAT, pointInterval: $scope.values.FVC9999C_elementMass.value});
         $scope.concChart.xAxis[0].setExtremes(0, $scope.values.FVC9999C_massBeforeDivert.value);
      }
   }
   
   for (var webTag in $scope.values) {
     adsReads[ctlValues.read[webTag].tag] = webTag;
   }

   $scope.writeVals = function(HMItag, value) {
         console.log(HMItag, value, ctlValues.write[HMItag])
      if (ctlValues.write[HMItag]) {
         console.log(ctlValues.write[HMItag].evt, {tag: ctlValues.write[HMItag].tag, value: value})
         socket.emit(ctlValues.write[HMItag].evt, {tag: ctlValues.write[HMItag].tag, value: value});
      }
   }
   
   $scope.setTubingSize = function(pump, index) {
      console.log("Tubing Size for "+pump+": " + index);
      $scope.writeVals(pump+'_TubeSize', $scope.tubeSizes[index].value);
   }
   
   $scope.setHeads = function(pump, index) {
      console.log("Heads for "+pump+": " + index);
      $scope.writeVals(pump+'_Heads', $scope.headNumbers[index].value);
   }
   
   $scope.prime = function(pump, prime) {
      console.log(pump, prime);
      if (prime) {
         if (ctlValues.write[pump+'_SP'].input === null) {
            ctlValues.write[pump+'_SP'].input = $scope.values[pump+'_SP'].value;
            $scope.writeVals(pump+'_SP',600.0);
         }
      } else {
          if (ctlValues.write[pump+'_SP'].input !== null) {
            $scope.writeVals(pump+'_SP',ctlValues.write[pump+'_SP'].input);
            ctlValues.write[pump+'_SP'].input = null;
         }
     }
      console.log(prime ? "Prime" : "No prime");
   }
   
   $scope.bindDynamicValues = function() {
      var re = /(\.)(\d*)/;
      $( ".dynamic-value" ).each(function( index ) {
         var tag = ($( this ).parent().attr('id')).replace("|","_");
         var eu = ($( this ).parent().children().last().text()).trim();
         if (typeof $scope.values[tag] === 'undefined') {
            $scope.values[tag] = {value: -1000.0, eu: eu};
            if (typeof ctlValues.read[tag] !== 'undefined') {
               adsReads[ctlValues.read[tag].tag] = tag;
            }
         }
         var textVal = $( this ).text();
         var m, numDecimals = 0;
         m = textVal.match(re);
         if (m !== null) {
            numDecimals = m[2].length;
         }
         $(this).html("{{values."+tag+".value.toFixed("+numDecimals+")}}");
         compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
         
         //Add event handler to show input box on click if the parent Text class is sp-text
         if ($(this).parent().hasClass('sp-text')) {
            var rect = $(this).parent().siblings("rect")[0];
            var pid = this.parentNode.parentNode.id; var x = rect.getAttribute("x"); var y = rect.getAttribute("y");
            $(this).parent().on("click", function() {
               insertSVGInputBox(pid, x, y, tag);
            });
         }
      });
      //subscribe to the ADS values
      var tags = Object.keys(adsReads);
      socket.emit('ADSSubscribe', tags);
      setTimeout(function () {socket.emit('ADSUpdateAll');},1000);  //wait 1 second then request all tag values
      
   };

   $scope.addSVGAngularClasses = function() {
      //Pump objects
      $( ".pump" ).each(function(index) {
         var tag = $(this).attr('id');
         console.log(tag);
         if (typeof $scope.values[tag] === 'undefined') {
            $scope.values[tag] = {value: false, false: 'Off', true: 'On'};
            if (typeof ctlValues.read[tag] !== 'undefined') {
               adsReads[ctlValues.read[tag].tag] = tag;
            }
         }
         console.log("{'hmi-active': values."+tag+"_RUN.value, 'hmi-inactive': !values."+tag+"_RUN.value}")
         $(this).attr("ng-class","{'hmi-active': values."+tag+"_RUN.value, 'hmi-inactive': !values."+tag+"_RUN.value}");
         compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
         //Add event handler to toggle pump on click
         $(this).on("click", function() {
            pumpToggle(tag);
         });
      });
      //Valve objects
      $( ".valve" ).each(function(index) {
         var tag = $(this).attr('tag');
         $(this).children(".fv-active").each(function(childindex) {
            $(this).attr("ng-class","{'hmi-active': values."+tag+"_PV.value, 'hmi-inactive': !values."+tag+"_PV.value}");
            compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
         });
         $(this).children(".fv-passive").each(function(childindex) {
            $(this).attr("ng-class","{'hmi-inactive': values."+tag+"_PV.value, 'hmi-active': !values."+tag+"_PV.value}");
            compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
         });
         //Add event handler to toggle valve on click
         $(this).on("click", function() {
            valveToggle(tag);
         });
      });
      //DI objects
      $( ".di" ).each(function(index) {
         var tag = $(this).attr('tag');
         $(this).children(".di-active").each(function(childindex) {
            $(this).attr("ng-class","{'hmi-active': values."+tag+"_PV.value, 'hmi-inactive': !values."+tag+"_PV.value}");
            compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
         });
         $(this).children(".di-passive").each(function(childindex) {
            $(this).attr("ng-class","{'hmi-inactive': values."+tag+"_PV.value, 'hmi-active': !values."+tag+"_PV.value}");
            compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
         });
      });
   };
   
   setTimeout(function () {
      $scope.addSVGAngularClasses();
      $scope.bindDynamicValues();
      $scope.$apply();
   },500);
   
   //event handlers for received objects
   socket.on('ADSUpdates', function(tags) {
      Object.keys(tags).forEach(function (key) {
         if (typeof adsReads[key] !== 'undefined') {
            if (typeof $scope.values[adsReads[key]].updatefn !== 'function') {
               $scope.values[adsReads[key]].value = tags[key].value;
            } else {
               $scope.values[adsReads[key]].updatefn({tag: $scope.values[adsReads[key]], value: tags[key].value});
            }
         }
      });
      $scope.$apply();
   });
   //arrays
   socket.on('ADSReadArray', function(arrays) {
      //Set raw concentration array
      var i, j, patc = [], m = [], s = [], n = [], els = [];
      var statuses = {0: {name:"Bad", marker: {symbol: "circle", fillColor: "#FF0000", lineColor: "#FF0000"}},
                      1: {name:"Timeout", marker: {symbol: "triangle", fillColor: "#FF4500", lineColor: "#FF0000"}},
                      11: {name:"Unknown", marker: {symbol: "triangle", fillColor: "#FFFF00", lineColor: "#FF0000"}},
                      12: {name:"Good", marker: {symbol: "square", fillColor: "#00FF00", lineColor: "#00FF00"}}}
      for (i = 0; i < arrays.length; i++) {
         switch (arrays[i].tag) {
            case "MAIN.FVC9999C.rawConc":
               $scope.rawConc = arrays[i].value.slice($scope.concXAxisValues.start, $scope.concXAxisValues.end+1);
               break;
            case "MAIN.FVC9999C.PATConc":
               patc = arrays[i].value.slice($scope.concXAxisValues.patStart, $scope.concXAxisValues.end+1);
               // $scope.PATConc = arrays[i].value.slice($scope.concXAxisValues.patStart, $scope.concXAxisValues.end+1);
               break;
            case "MAIN.FVC9999C.PATCount":
               n = arrays[i].value.slice($scope.concXAxisValues.patStart, $scope.concXAxisValues.end+1);
               break;
            case "MAIN.FVC9999C.PATVariance":
               s = arrays[i].value.slice($scope.concXAxisValues.patStart, $scope.concXAxisValues.end+1);
               break;
            case "MAIN.FVC9999C.elStatus":
               els = arrays[i].value.slice($scope.concXAxisValues.patStart, $scope.concXAxisValues.end+1);
               break;
            default:
               break;
         }
      }
      if (typeof $scope.concChart == "object") {
         $scope.concChart.series[0].setData($scope.rawConc);
         $scope.PATConc = [];
         var patstart = $scope.values.FVC9999C_massBeforePAT.value;
         var inc = $scope.values.FVC9999C_elementMass.value;
         for (i = 0; i < patc.length; i++) {
            $scope.PATConc.push({x: (patstart + inc*i), y: patc[i], marker: statuses[els[i]]["marker"]});
         }
		 
         $scope.concChart.series[1].setData($scope.PATConc);
		 var divertColor = "rgba(80, 0, 0, 0.2)";
		 if (statuses[els[0]]["name"]=="Good") {
			 divertColor = "rgba(80, 169, 80, 0.2)";
		 }
         $scope.concChart.xAxis[0].update({
			"plotBands" : [{
				 "from": 23,
				 "to": 31,
				 "color":divertColor
			}]
		 })
      }
    });

   //***************************************************************************
   //Run on initial load when document is ready 
   //***************************************************************************
   angular.element(document).ready(function () {

      //***************************************************************************
      // Charts
      //***************************************************************************
      Highcharts.setOptions({global: {useUTC: false}});

      $scope.flowChart = Highcharts.chart(chartFlowOptions.highchartsOptions);
      $scope.concChart = Highcharts.chart(chartConcentrationOptions.highchartsOptions);
      //subscribe to arrays
      socket.emit('ADSReadArray',chartConcentrationOptions.tags);
      
      //Add null datapoints to chart so size of data series remains
      var newData = [];
      for (let i = (Date.now() - Math.trunc(chartFlowOptions.durationMS/chartFlowOptions.updateMS)); i <= Date.now(); i++) {
         newData.push([i, 0.0]);  //build new series.data array with null values
      }
      for (let i = 0; i < $scope.flowChart.series.length; i++) {
         $scope.flowChart.series[i].setData(newData,false, false, false);
      }
      //Schedule updates
      setTimeout(() => {
         var lastRedraw = 0;
         //a lot of monkeying around with updates cause it looks like you cannot add points to different series before
         // calling a redraw - everything gets gobbered up.
         var datapoints = new Array($scope.flowChart.series.length);
         for (let i=0; i < datapoints.length; i++) {datapoints[i] = [];}
         $scope.flowChartIntervalID = setInterval(() => {
            let now = Date.now();
            //Add new data point to array rather than calling add
            for (let i = 0; i < datapoints.length; i++) {
               datapoints[i].push([now, $scope.values[chartFlowOptions.tags[i]].value]);
               //console.log("making datatpoint", i, datapoints[i]);
            }
            //console.log("Datapoints3: ", datapoints);
            
            if ((now - lastRedraw) >= chartFlowOptions.redrawMS) {
               lastRedraw = now;
               
               for (let i = 0; i < datapoints.length; i++) {
                  while (datapoints[i].length >= 1) {
                     let redraw = (datapoints[i].length === 1);
                     let datapoint = datapoints[i].shift();
                     $scope.flowChart.series[i].addPoint(datapoint, redraw, true, false);
                  }
               }

            }
         }, chartFlowOptions.updateMS)
      }, 10000); //Timeout starts the interval update 10 seconds after page loads
   });
   
   
}]);

//***************************************************************************
// Helper function to angular compile the new HTML inserted in the DOM
//   Pain to figure this out - see stackoverflow
//   http://stackoverflow.com/questions/11771513/angularjs-jquery-how-to-get-dynamic-content-working-in-angularjs
//***************************************************************************
function compileAngularElement(elSelector) {
//   var elSelector = (typeof elSelector == 'string') ? elSelector : null ;  
   if (elSelector != null ) {
      var $div = $( elSelector );
      // $target is the element in the DOM to which the angular app is attached
      var $target = $("[ng-app]");
      angular.element($target).injector().invoke(['$compile', function ($compile) {
         var $scope = angular.element($target).scope();
         $compile($div)($scope);
         // Finally, refresh the watch expressions in the new element
         $scope.$apply();
      }]);
   }
}

function updateColor(o) {
   o.tag.value = o.value;
   var xyY = c0lor.xyY(MYSCOPE.values.AT9999CW_X.value, MYSCOPE.values.AT9999CW_Y.value, MYSCOPE.values.AT9999CW_yy.value);
   var hex = c0lor.space.rgb.sRGB.rgb(xyY.XYZ()).RGB().hex();
   if (typeof hex === 'string') {
      $('#colorwise').css({fill: "#"+hex});
   } else {
      $('#colorwise').css({fill: "#111111"});
   }
}

function insertSVGInputBox(parentID, x, y, tag) {
   var el = document.getElementById(parentID+'-foreignObject');
   //remove if it exists
   if (el) {el.parentNode.removeChild(el);}
   //add new element input box
   var curValue = MYSCOPE.values[tag].value;
   el = document.getElementById(parentID);
   var fo = document.createElementNS("http://www.w3.org/2000/svg", 'foreignObject');
   fo.setAttribute("x", x);
   fo.setAttribute("y", y);
   fo.setAttribute("id", parentID+'-foreignObject');
   fo.innerHTML = "<input type=\"number\" id=\""+parentID+"-inputbox"+"\" class=\"svgInput\" value=\""+curValue+"\"" +
                       "onkeyup=\"svgInputHandler(event,{id:'"+parentID+"-inputbox"+"', tag: '"+tag+"'})\" xmlns=\"http://www.w3.org/1999/xhtml\"></input>"
   el.appendChild(fo);   
}

function svgInputHandler(e, o) {
   var el = document.getElementById(o.id);
   switch (e.key) {
      case "Enter":
         MYSCOPE.writeVals(o.tag, Number(el.value));
         el.parentNode.parentNode.removeChild(el.parentNode);
         break;
      case "Escape":
         el.parentNode.parentNode.removeChild(el.parentNode);
         break;
   }
}

function valveToggle(tag) {
   var newValue = !MYSCOPE.values[tag+"_PV"].value;
   MYSCOPE.writeVals(tag, newValue);
}

function pumpToggle(tag) {
   //Make sure pump is in remote
   if (MYSCOPE.values[tag+"_LOCAL"].value) return;
   var newValue = MYSCOPE.values[tag+"_RUN"].value ? 0 : 1;
   MYSCOPE.writeVals(tag+"_Run_RQ", newValue);
}