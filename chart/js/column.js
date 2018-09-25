 var chart = {
      type: 'column'
   };
   var title = {
      text: '条形图'   
   };
   var xAxis = {
	title : {
		text : 'x轴'
	},
	categories: ['a','b','c','d'],
      crosshair: true
   };
   var yAxis = {
      min: 0,
      title: {
         text: 'y轴'         
      }      
   };
   var tooltip = {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   };
   var plotOptions = {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   };  
   var credits = {
      enabled: false
   };
   
   var series= [{
        name: '系列一',
            data: [ 12, 0, 23, 23 ]
        }, {
            name: '系列二',
            data : [ 3, 21, 23, 23 ]
        },  {
            name: '系列三',
            data : [ 1, 3, 9, 9 ]
   }];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;  
   json.credits = credits;