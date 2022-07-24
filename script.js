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
  
var shapechart = [

["Circle", "51", "#f4221e"],

["Half circle", "105" , "#ff6700"],

["Yellow", "23" , "#fd8c39"],

["Green", "25", "#5baa09"],

["Light blue", "72", "#479edb"],

["Blue", "88", "#093ac6"],

["Purple", "77", "#746ad0"],

["Pink", "5", "#f45c87"],

["Brown", "80", "#89582e"],

["Black", "80", "#000000"]

];

var unit = "";

var colormaxval = 88

var shapemaxval = 88

function drawchart(){

jQuery.each(colorchart, function(index, value) {
  $('.colorchart').append("<p>"+value[0]+"<sub> "+value[1]+unit+ "</sub></p><div class='bar' style='width:"+value[1] / colormaxval*100 +"%;background-color:"+value[2]+"'></div>");
  $('.shapechart').append("<p>"+value[0]+"<sub> "+value[1]+unit+ "</sub></p><div class='bar' style='width:"+value[1] / shapemaxval*100 +"%;background-color:"+value[2]+"'></div>");
});

}

drawchart(); 

});