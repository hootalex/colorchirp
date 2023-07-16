var responses = 250
var topcolor = "Purple"
var topshape = "loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--purple)")

const birds =  [
   {
    "name": "Mourning Dove",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC613539%20-%20Mourning%20Dove%20-%20Zenaida%20macroura_01.m4a?v=1682293565724",
    "copyright" : "Peter Ward and Ken Hall",
    "xenolink": "https://xeno-canto.org/613539"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Purple", "66", "var(--purple)"],
  
["Brown", "62", "var(--brown)"],
  
["Light blue", "41", "var(--lightblue)"],
  
["Blue", "40", "var(--blue)"],
  
["Black", "17", "var(--black)"],

["Yellow", "11" , "var(--yellow)"],
  
["Orange", "4" , "var(--orange)"],
  
["Green", "3", "var(--green)"],

["Pink", "3", "var(--pink)"],
  
["Red", "1", "var(--red)"]

];
  
var shapechart = [
  
["Loop", "81", "var(--neutral3)", loop],
  
["Half-circle", "52" , "var(--neutral2)", halfcircle],
  
["Wave", "49", "var(--neutral1)", wave],
  
["Circle", "36", "var(--neutral3)", circle],
  
["Bouba", "17", "var(--neutral2)", bouba],
  
["Rhombus", "8", "var(--neutral1)", rhombus],
  
["Zigzag", "2", "var(--neutral3)", zigzag],
  
["Diamond", "2", "var(--neutral2)", diamond],

["Triangle", "1" , "var(--neutral1)", triangle],
  
["Kiki", "0", "var(--neutral3)", kiki],
  
["Line", "0", "var(--neutral2)", line],
  
["Square", "0", "var(--neutral1)", square]

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