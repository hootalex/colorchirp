$( document ).ready(function() {

//All you have to do is enter the chart data in the proper order, and specific the max value and unit of measurement. 

var color = "#f4221e"
    
var chartdata = [

["Red", "4,652.66", "#f4221e"],

["ATV", "9,891.26" , "#ff6700"],

["Bicycle", "14,064.07" , color],

["Dog sled", "1,032.01", color],

["Golf cart", "10,744.59", color],

["Horseback", "841.01", color],

["Non-motorized boat", "11,782.06", color],

["Ski", "14,744.30", color],

["Snowmobile", "7,867.26", color],

["Snowshoe", "3,710.19", color],

["Wheelchair", "216.66", color]

];

var unit = "mi";

var maxval = 14744.30

function drawchart(){

jQuery.each(chartdata, function(index, value) {
  $('.chart').append("<div class='bar' style='width:"+value[1].replace(/\D/g,'') / maxval +"%;background-color:"+value[2]+"'><p>" +"<b>"+value[0]+"</b> "+value[1]+unit+ "</p></div>")
});

}

drawchart(); 

});