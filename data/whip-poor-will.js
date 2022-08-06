var responses = 264
var topcolor = "Purple"
var topshape = "loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--purple)")

const birds =  [
   {
    "name": "Eastern whip-poor-will",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC319047%20-%20Eastern%20Whip-poor-will%20-%20Antrostomus%20vociferus_01.mp3?v=1659389444269",
    "copyright" : "Norman Levey",
    "xenolink": "https://xeno-canto.org/319047"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Purple", "44", "var(--purple)"],
  
["Green", "38", "var(--green)"],
  
["Light blue", "35", "var(--lightblue)"],
  
["Blue", "28", "var(--blue)"],
  
["Pink", "27", "var(--pink)"],

["Orange", "23" , "var(--orange)"],
  
["Red", "21", "var(--red)"],
  
["Brown", "20", "var(--brown)"],

["Yellow", "20" , "var(--yellow)"],
  
["Black", "7", "var(--black)"],

];
  
var shapechart = [
  
["Loop", "90", "var(--neutral3)", loop],
  
["Bouba", "50", "var(--neutral1)", bouba],
    
["Wave", "30", "var(--neutral1)", wave],

["Rhombus", "11", "var(--neutral2)", rhombus],
  
["Circle", "10", "var(--neutral3)", circle],
  
["Diamond", "10", "var(--neutral2)", diamond],

["Triangle", "8" , "var(--neutral3)", triangle],

["Kiki", "25", "var(--neutral1)", kiki],
  
["Zigzag", "24", "var(--neutral2)", zigzag],
  
["Square", "3", "var(--neutral3)", square],
  
["Half-circle", "2" , "var(--neutral2)", halfcircle],

["Line", "1", "var(--neutral1)", line]

];

var unit = "";

// var colormaxval = 113

// var shapemaxval = 238
  
var colormaxval = 0

var shapemaxval = 0

jQuery.each(colorchart, function(index, value) {
  colorcharttotal = colorcharttotal+Number(value[1])
  
  if (colormaxval < Number(value[1])) {
    colormaxval = Number(value[1])
  }
  
  });
  
  jQuery.each(shapechart, function(index, value) {
  shapecharttotal = shapecharttotal+Number(value[1])
    
      if (shapemaxval < Number(value[1])) {
    shapemaxval = Number(value[1])
  }
    
  });
  
  // console.log(shapecharttotal)

function drawchart(){

jQuery.each(colorchart, function(index, value) {
  
  $('.colorchart').append("<p>"+value[0]+"<sub> "+value[1]+unit+" (" + (value[1]/colorcharttotal*100).toFixed(1)+ "%)</sub></p><div class='bar' style='width:"+value[1] / colormaxval*100 +"%;background-color:"+value[2]+"'></div>");
});
  
  jQuery.each(shapechart, function(index, value) {
    
  $('.shapechart').append("<p class='"+value[0]+"'>"+value[3]+value[0]+"<sub> "+value[1]+unit+" ("+ (value[1]/shapecharttotal*100).toFixed(1)+ "%) </sub></p><div class='bar' style='width:"+value[1] / shapemaxval*100 +"%;background-color:"+value[2]+"'></div>");
});

}

drawchart(); 
  
var bird = birds[0].name
var color = null
var shape = null

var sound = new Howl({
  src: [birds[0].url],
  html5: true,
  onend: function() {
    $("#play").removeClass("disable")
  }
});
  
  $(".credit").append(birds[0].name + " icon by <a href='https://alex.gd'>Alex Tomlinson</a>. Sound recorded by " + "<a href='"+birds[0].xenolink+"'>"+birds[0].copyright+"</a>")


$( "#play" ).on( "click", function( event ) {
sound.play();
  $("#play").addClass("disable");
  });

});