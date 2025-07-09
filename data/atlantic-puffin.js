var responses = 468
var topcolor = "Brown"
var topshape = "wave"

$("#winner").html(wave)
$("#winner svg").css("fill","var(--brown)")

const birds =  [
   {
    "name": "Atlantic Puffin",
    "url" : "/glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC667980%20-%20Atlantic%20Puffin%20-%20Fratercula%20arctica.mp3?v=1658842229401",
    "copyright" : "Irish Wildlife Sounds",
    "xenolink": "https://xeno-canto.org/667980"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Brown", "232", "var(--brown)"],
  
["Green", "60", "var(--green)"],

["Orange", "46" , "var(--orange)"],
  
["Black", "40", "var(--black)"],
  
["Blue", "27", "var(--blue)"],

["Purple", "26", "var(--purple)"],

["Yellow", "20" , "var(--yellow)"],

["Light blue", "5", "var(--lightblue)"],

["Pink", "4", "var(--pink)"],
  
["Red", "4", "var(--red)"]

];
  
var shapechart = [
  
["Wave", "83", "var(--neutral3)", wave],
  
["Rhombus", "81", "var(--neutral2)", rhombus],

["Half-circle", "76" , "var(--neutral1)", halfcircle],
  
["Bouba", "50", "var(--neutral3)", bouba],
  
["Zigzag", "39", "var(--neutral2)", zigzag],
  
["Loop", "29", "var(--neutral1)", loop],

["Triangle", "26" , "var(--neutral3)", triangle],
  
["Kiki", "18", "var(--neutral2)", kiki],

["Diamond", "17", "var(--neutral1)", diamond],
  
["Line", "16", "var(--neutral3)", line],
  
["Circle", "16", "var(--neutral2)", circle],
  
["Square", "14", "var(--neutral1)", square]

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