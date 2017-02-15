chartFlowOptions = {updateMS: 100, durationMS: 120000, redrawMS: 5000,
tags: ["FT9999A_PV", "FT9999A_PVFilt", "FC9999A_SP", "FT9999B_PV", "FT9999B_PVFilt", "FC9999B_SP"],
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
    "renderTo": "chart-flow",
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
    "text": "Flow",
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
      "dateTimeLabelFormats": {
         "millisecond": '%S.%L',
         "second": '%H:%M:%S',
         "minute": '%H:%M',
         "hour": '%H:%M',
         "day": '%e. %b',
         "week": '%e. %b',
         "month": '%b \'%y',
         "year": '%Y'
      },
      "crosshair": {"snap": false},
      "gridLineWidth": 1,
      reversed: true,
      "title": {
        "text": null,
        "style": {
          "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
          "color": "#666666",
          "fontSize": "10px",
          "fontWeight": "normal",
          "fontStyle": "normal"
        }
      },
      "type": 'datetime',
    }
  ],
  "yAxis": [
    {
      "crosshair": {"snap": false},
      "lineWidth": 1,
      max: null,
      "min": 0.0,
      "tickLength": 4,
      "tickWidth": 1,
      "title": {
        "text": "g/min",
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
      "name": "API Raw",
      "_colorIndex": 0,
      "_symbolIndex": 0
    },
    {
      "type": "line", animation: false, dashStyle: "ShortDash", marker: {enabled: false},
      "data": [],
      "name": "API Avg",
      "_colorIndex": 0,
      "_symbolIndex": 0
    },
    {
      "type": "line", animation: false, dashStyle: "ShortDot", lineWidth: 2, marker: {enabled: false},
      "data": [],
      "name": "API SP",
      "_colorIndex": 0,
      "_symbolIndex": 0
    },
    {
      "type": "line", animation: false, dashStyle: "Solid", marker: {enabled: false},
      "data": [],
      "name": "Buffer Raw",
      "_colorIndex": 2,
      "_symbolIndex": 0
    },
    {
      "type": "line", animation: false, dashStyle: "ShortDash", marker: {enabled: false},
      "data": [],
      "name": "Buffer Avg",
      "_colorIndex": 2,
      "_symbolIndex": 0
    },
    {
      "type": "line", animation: false, dashStyle: "ShortDot", lineWidth: 2, marker: {enabled: false},
      "data": [],
      "name": "Buffer SP",
      "_colorIndex": 2,
      "_symbolIndex": 0
    }
  ]
}}