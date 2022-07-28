var responses = 419
var topcolor = "Brown"
var topshape = "rhombus"

$("#winner").html(rhombus)
$("#winner svg").css("fill","var(--brown)")

const birds =  [
   {
    "name": "Atlantic Puffin",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC667980%20-%20Atlantic%20Puffin%20-%20Fratercula%20arctica.mp3?v=1658842229401",
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

["Red", "3", "var(--red)"],

["Orange", "18" , "var(--orange)"],

["Yellow", "13" , "var(--yellow)"],

["Green", "26", "var(--green)"],

["Light blue", "1", "var(--lightblue)"],

["Blue", "11", "var(--blue)"],

["Purple", "12", "var(--purple)"],

["Pink", "3", "var(--pink)"],

["Brown", "165", "var(--brown)"],

["Black", "20", "var(--black)"]

];
  
var shapechart = [

["Circle", "6", "var(--neutral1)", circle],

["Half-circle", "29" , "var(--neutral2)", halfcircle],

["Triangle", "10" , "var(--neutral3)", triangle],

["Square", "8", "var(--neutral1)", square],

["Diamond", "9", "var(--neutral2)", diamond],

["Rhombus", "35", "var(--neutral3)", rhombus],

["Bouba", "21", "var(--neutral1)", bouba],

["Kiki", "4", "var(--neutral2)", kiki],

["Loop", "11", "var(--neutral3)", loop],

["Line", "8", "var(--neutral1)", line],
  
["Wave", "31", "var(--neutral2)", wave],
  
["Zigzag", "18", "var(--neutral3)", zigzag],

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