var ctlValues = {
   read: {
      //**********P9999A******************
      "ST9999A_PV" : {src: {}, tag: "Main.P9999A.fSpeedPV"},
      "ST9999A_FlowPV" : {src: {}, tag: "Main.P9999A.fFlowPV"},
      "SC9999A_OUT" : {src: {}, tag: "Main.P9999A.fSpeedSP"},
      "SC9999A_FlowOUT" : {src: {}, tag: "Main.P9999A.fFlowSP"},
      "P9999A_RUN" : {src: {}, tag: "Main.P9999A.bRun"},
      "P9999A_LOCAL" : {src: {}, tag: "Main.P9999A.bLocal"},
      "P9999A_TubeSize" : {src: {}, tag: "Main.P9999A.nTubeSize"},
      "P9999A_Heads" : {src: {}, tag: "Main.P9999A.nHeads"},
      //**********P9999B******************
      "ST9999B_PV" : {src: {}, tag: "Main.P9999B.fSpeedPV"},
      "ST9999B_FlowPV" : {src: {}, tag: "Main.P9999B.fFlowPV"},
      "SC9999B_OUT" : {src: {}, tag: "Main.P9999B.fSpeedSP"},
      "SC9999B_FlowOUT" : {src: {}, tag: "Main.P9999B.fFlowSP"},
      "P9999B_RUN" : {src: {}, tag: "Main.P9999B.bRun"},
      "P9999B_LOCAL" : {src: {}, tag: "Main.P9999B.bLocal"},
      "P9999B_TubeSize" : {src: {}, tag: "Main.P9999B.nTubeSize"},
      "P9999B_Heads" : {src: {}, tag: "Main.P9999B.nHeads"},
      //**********API meter******************
      "FT9999A_PV" : {src: {}, tag: "MAIN.FT9999A.pv"},
      "FT9999A_PVFilt" : {src: {}, tag: "MAIN.FT9999A.pvfilt"},
      "FQ9999A_total" : {src: {}, tag: "MAIN.fbFQ9999A.total"},
      "PT9999A_PV" : {src: {}, tag: "MAIN.PT9999A.pv"},
      //**********Buffer meter******************
      "FT9999B_PV" : {src: {}, tag: "MAIN.FT9999B.pv"},
      "FT9999B_PVFilt" : {src: {}, tag: "MAIN.FT9999B.pvfilt"},
      "FQ9999B_total" : {src: {}, tag: "MAIN.fbFQ9999B.total"},
      "PT9999B_PV" : {src: {}, tag: "MAIN.PT9999B.pv"},
      //**********Combined Flow meters******************
      "FT9999C_PV" : {src: {}, tag: "MAIN.FT9999C.pv"},
      "FT9999C_PVFilt" : {src: {}, tag: "MAIN.FT9999C.pvfilt"},
      "FQ9999C_total" : {src: {}, tag: "MAIN.fbFQ9999C.total"},
      "PT9999C_PV" : {src: {}, tag: "MAIN.PT9999C.pv"},
      //**********Optek******************
      "AT9999OPCONC_PV" : {src: {}, tag: "MAIN.AT9999OPCONC.pv"},
      "AT9999OP300_PV" : {src: {}, tag: "MAIN.AT9999OP300.pv"},
      "AT9999OP313_PV" : {src: {}, tag: "MAIN.AT9999OP313.pv"},
      "AT9999OPDIFF_PV" : {src: {}, tag: "MAIN.AT9999OPDIFF.pv"},
      //**********Reveal******************
      "AT9999RV290_PV" : {src: {}, tag: "MAIN.AT9999RV290.pv"},
      "AT9999RV300_PV" : {src: {}, tag: "MAIN.AT9999RV300.pv"},
      "AT9999RV310_PV" : {src: {}, tag: "MAIN.AT9999RV310.pv"},
      "AT9999RV320_PV" : {src: {}, tag: "MAIN.AT9999RV320.pv"},
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
      "SC9999A_FlowSP" : {evt: 'ADSWrite', tag: "MAIN.P9999A.fFlowSP_RQ", input: null},
      "P9999A_Local_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nLocal_RQ"},
      "P9999A_Run_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nRun_RQ"},
      "P9999A_TubeSize" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nTubeSize"},
      "P9999A_Heads" : {evt: 'ADSWrite', tag: "MAIN.P9999A.nHeads"},
      "SC9999B_SP" : {evt: 'ADSWrite', tag: "MAIN.P9999B.fSpeedSP_RQ", input: null},
      "SC9999B_FlowSP" : {evt: 'ADSWrite', tag: "MAIN.P9999B.fFlowSP_RQ", input: null},
      "P9999B_Local_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nLocal_RQ"},
      "P9999B_Run_RQ" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nRun_RQ"},
      "P9999B_TubeSize" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nTubeSize"},
      "P9999B_Heads" : {evt: 'ADSWrite', tag: "MAIN.P9999B.nHeads"},
      "FQ9999A_Reset_RQ" : {evt: 'ADSWrite', tag: "MAIN.fbFQ9999A.resetRQ"},
      "FQ9999B_Reset_RQ" : {evt: 'ADSWrite', tag: "MAIN.fbFQ9999B.resetRQ"},
      "FQ9999C_Reset_RQ" : {evt: 'ADSWrite', tag: "MAIN.fbFQ9999C.resetRQ"},
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
      'P9999A_TubeSize' : {eu: 'Size', value: 13},
      'P9999A_Heads' : {eu: '#', value: 2},
      'P9999B_RUN' : {'false': 'Stopped', 'true': 'Running', value: false},
      'P9999B_LOCAL' : {'false': 'Remote', 'true': 'Local', value: true},
      'P9999B_TubeSize' : {eu: 'Size', value: 13},
      'P9999B_Heads' : {eu: '#', value: 2},
      'FQ9999A_total' : {eu: 'mL', value: 0.0},
      'FQ9999B_total' : {eu: 'mL', value: 0.0},
      'FQ9999C_total' : {eu: 'mL', value: 0.0},
      'AT9999CW_X' : {eu: 'X', value: 0.0, updatefn: function(o) {updateColor(o);}},
      'AT9999CW_Y' : {eu: 'Y', value: 0.0, updatefn: function(o) {updateColor(o);}},
      'AT9999CW_yy' : {eu: 'y', value: 0.0, updatefn: function(o) {updateColor(o);}}
   };

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
            ctlValues.write[pump+'_SP'].input = $scope.values[pump+'_OUT'].value;
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
      });
      //subscribe to the ADS values
      var tags = Object.keys(adsReads);
      socket.emit('ADSSubscribe', tags);
      setTimeout(function () {socket.emit('ADSUpdateAll');},1000);  //wait 1 second then request all tag values
      
   };

   $scope.addSVGAngularClasses = function() {
      $( ".pump" ).each(function(index) {
         var tag = $(this).attr('id');
         console.log(tag)
         if (typeof $scope.values[tag] === 'undefined') {
            $scope.values[tag] = {value: false, false: 'Off', true: 'On'};
            if (typeof ctlValues.read[tag] !== 'undefined') {
               adsReads[ctlValues.read[tag].tag] = tag;
            }
         }
         console.log("{running: values."+tag+"_RUN.value}")
         $(this).attr("ng-class","{running: values."+tag+"_RUN.value}");
         compileAngularElement(this);  //after changing the SVG, need to 'compile' it so angular updates the values correctly
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