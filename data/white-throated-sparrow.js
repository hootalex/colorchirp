var responses = 169
var topcolor = "Yellow"
var topshape = "loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--yellow)")

const birds =  [
   {
 "name": "White-throated Sparrow",
    "url" : "/glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC626756%20-%20White-throated%20Sparrow%20-%20Zonotrichia%20albicollis_01.mp3?v=1673106804493",
    "copyright" : "Sue Riffe",
    "xenolink": "https://xeno-canto.org/626756",
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Yellow", "65" , "var(--yellow)"],
  
["Light blue", "41", "var(--lightblue)"],
  
["Green", "20", "var(--green)"],
  
["Pink", "15", "var(--pink)"],
  
["Orange", "9" , "var(--orange)"],
  
["Purple", "9", "var(--purple)"],
  
["Red", "4", "var(--red)"],
  
["Black", "3", "var(--black)"],
  
["Brown", "2", "var(--brown)"],
  
["Blue", "1", "var(--blue)"],

];
  
var shapechart = [
  
["Loop", "54", "var(--neutral3)", loop],
  
["Zigzag", "25", "var(--neutral2)", zigzag],
  
["Wave", "23", "var(--neutral1)", wave],
  
["Bouba", "13", "var(--neutral3)", bouba],
  
["Half-circle", "11" , "var(--neutral2)", halfcircle],
  
["Diamond", "10", "var(--neutral1)", diamond],
  
["Line", "9", "var(--neutral3)", line],
  
["Rhombus", "9", "var(--neutral2)", rhombus],
  
["Kiki", "7", "var(--neutral1)", kiki],
  
["Triangle", "5" , "var(--neutral3)", triangle],
  
["Circle", "2", "var(--neutral2)", circle],
  
["Square", "1", "var(--neutral1)", square],

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