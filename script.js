var circle = ''



$( document ).ready(function() {

//All you have to do is enter the chart data in the proper order, and specific the max value and unit of measurement. 
    
var colorchart = [

["Red", "6", "#f4221e"],

["Orange", "21" , "#ff6700"],

["Yellow", "23" , "#fd8c39"],

["Green", "25", "#5baa09"],

["Light blue", "72", "#479edb"],

["Blue", "88", "#093ac6"],

["Purple", "77", "#746ad0"],

["Pink", "5", "#f45c87"],

["Brown", "80", "#89582e"],

["Black", "80", "#000000"]

];
  
var scolor = "#479edb"
  
var shapechart = [

["Circle", "51", scolor],

["Half circle", "105" , scolor],

["Triangle", "15" , scolor],

["Square", "3", scolor],

["Diamond", "7", scolor],

["Rhombus", "24", scolor],

["Bouba", "22", scolor],

["Kiki", "6", scolor],

["Loop", "187", scolor],

["Line", "3", scolor],
  
["Wave", "54", scolor],
  
["Zigzag", "3", scolor],

];

var unit = "";

var colormaxval = 88

var shapemaxval = 187

function drawchart(){

jQuery.each(colorchart, function(index, value) {
  $('.colorchart').append("<p>"+value[0]+"<sub> "+value[1]+unit+ "</sub></p><div class='bar' style='width:"+value[1] / colormaxval*100 +"%;background-color:"+value[2]+"'></div>");
});
  
  jQuery.each(shapechart, function(index, value) {
  $('.shapechart').append("<p>"+value[0]+"<sub> "+value[1]+unit+ "</sub></p><div class='bar' style='width:"+value[1] / shapemaxval*100 +"%;background-color:"+value[2]+"'></div>");
});

}

drawchart(); 

});