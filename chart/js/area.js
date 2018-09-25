var chart = {
      type: 'area'
   };
   var title = {
      text: '面积图'   
   };
   var xAxis = {
	title : {
		text : 'x轴'
	},
	categories: ['a','b','c','d'],
      crosshair: true
   };
   var yAxis = {
      title: {
         text: 'y轴'
      },
      labels: {
         formatter: function () {
            return this.value ;
         }
      }
   };
   var plotOptions = {
      area: {
         marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
   var series= [{
         name: '系列一',
         data : [ 12, 0, 23, 23 ]
        }, {
            name: '系列二',
            data : [ 3, 21, 23, 23 ]
        	}
        , {
    	name: '系列三',
    	data : [ 1, 3, 9, 9 ]
    }
   ];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;