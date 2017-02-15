chartConcentrationOptions = {volumes: 1000, redrawMS: 5000,
tags: ["MAIN.FVC9999C.rawConc", "MAIN.FVC9999C.PATConc", "MAIN.FVC9999C.PATCount", "MAIN.FVC9999C.PATVariance", "MAIN.FVC9999C.elStatus"],
highchartsOptions: { 
  "chart": {
	"zoomType" : "x",
    "type": "line",
    "animation": false,
    "borderColor": "#335cad",
    "borderWidth": 0,
    "polar": false,
    "marginTop": 10,
    "marginBottom": 25,
    "renderTo": "chart-concentration",
    "style": {
      "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
      "color": "#333",
      "fontSize": "10px",
      "fontWeight": "normal",
      "fontStyle": "normal"
    }
  },
  "colors": [
	"#50a950",
    "#e91e63",
    "#3f51b5",
    "#9c27b0",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1"
  ],
  "credits": {
    "enabled": false
  },
  "exporting": {},
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "floating": false,
    "itemStyle": {
      "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
      "color": "#333333",
      "fontSize": "10px",
      "fontWeight": "bold",
      "fontStyle": "normal",
      "cursor": "pointer"
    }
  },
  "plotOptions": {
    "line": {"lineWidth": 1, "showCheckbox": false},
    "series": {
      "animation": false,
      "dataLabels": {
        "style": {
          "color": "contrast",
          "fontSize": "8px",
          "fontWeight": "bold",
          "textOutline": "1px 1px contrast"
        },
        "enabled": false
      }
    }
  },
  "title": {
    "text": "Concentration",
    "style": {
      "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
      "color": "#333333",
      "fontSize": "12px",
      "fontWeight": "bold",
      "fontStyle": "normal",
      "fill": "#333333",
      "width": "725px"
    }
  },
  "xAxis": [
    {
      "crosshair": {"snap": false},
      "gridLineWidth": 1,
      reversed: false,
      "title": {
        "text": "mL",
        "style": {
          "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
          "color": "#666666",
          "fontSize": "10px",
          "fontWeight": "normal",
          "fontStyle": "normal"
        }
      },
      "type": 'linear',
	  "plotBands": [{
		"from":23,
		"to":31,
		"color": "rgba(80,169,80,0.2)"
	  }],
    }
  ],
  "yAxis": [
    {
      "crosshair": {"snap": false},
      "lineWidth": 1,
      "max": null,
      "min": 0.0,
      "tickLength": 4,
      "tickWidth": 1,
      "title": {
        "text": "mg/mL",
        "style": {
          "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
          "color": "#666666",
          "fontSize": "10px",
          "fontWeight": "normal",
          "fontStyle": "normal"
        }
      }
    }
  ],
  "series": [
    {
      "type": "line", animation: false, dashStyle: "Solid", marker: {enabled: false},
      "data": [],
      pointStart: 0,
      pointInterval: .5,
      "name": "Raw Concentration",
      "_colorIndex": 0,
      "_symbolIndex": 0
	  // "zoneAxis": "x",
	  // "zones": [{
		  // "value": 5,
		  // "_colorIndex": 0
	  // }, {
		  // "value":31,
		  // "_colorIndex":2
	  // }]
    },
    {
      "type": "line", animation: false, dashStyle: "Solid", marker: {enabled: false},
      "data": [],
      pointStart: 23.5,
      pointInterval: .5,
      "name": "PAT Concentration",
      marker: {enabled: true},
      "_colorIndex": 2,
      "_symbolIndex": 0
	}
    // }, 
	// {
		// "type": "areaspline", animation: false, marker: {enabled: false},
		//"data": [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
		// "data":[],
		// pointStart: 0,
		// pointInterval: .5,
		// "name": " ",
		// "zoneAxis": "x",
		// "zones": [{
			// "value": 23, 
			// "_colorIndex": 0
		// }]
	// }	
	

   ]
}}