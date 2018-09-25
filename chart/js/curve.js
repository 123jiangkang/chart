var title = {
	text : '折线图'
};
var xAxis = {
	title : {
		text : 'x轴'
	},
	categories : [ 'a', 'b', 'c', 'd' ]
};
var yAxis = {
	title : {
		text : 'y轴'
	},
	plotLines : [ {
		value : 0,
		width : 1,
		color : '#808080'
	} ]
};

var tooltip = {
	valueSuffix : '\xB0C'
}

var legend = {
	layout : 'vertical',
	align : 'right',
	verticalAlign : 'middle',
	borderWidth : 0
};

var series = [
	{
		name : '系列一',
		data : [ 12, 0, 23, 23 ]
	},
	{
		name : '系列二',
		data : [ 3, 21, 23, 23 ]
	},
	{
		name : '系列三',
		data : [ 1, 3, 9, 9 ]
	}
];

var json = {};

json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;
json.series = series;