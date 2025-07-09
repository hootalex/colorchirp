var responses = 466
var topcolor = "Yellow"
var topshape = "loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--yellow)")

const birds =  [
   {
    "name": "American Robin",
    "url" : "/glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC729933%20-%20American%20Robin%20-%20Turdus%20migratorius%20propinquus_01-trimmed.mp3?v=1659043124446",
    "copyright" : "Scott Olmstead",
    "xenolink": "https://xeno-canto.org/729933"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Yellow", "215" , "var(--yellow)"],
  
["Light blue", "64", "var(--lightblue)"],
  
["Green", "53", "var(--green)"],
  
["Pink", "46", "var(--pink)"],

["Orange", "41" , "var(--orange)"],
  
["Red", "29", "var(--red)"],
  
["Brown", "6", "var(--brown)"],
  
["Blue", "6", "var(--blue)"],

["Purple", "6", "var(--purple)"],
  
["Black", "0", "var(--black)"]

];
  
var shapechart = [
  
["Loop", "144", "var(--neutral3)", loop],
  
["Bouba", "96", "var(--neutral2)", bouba],
  
["Kiki", "52", "var(--neutral1)", kiki],
  
["Wave", "49", "var(--neutral3)", wave],
  
["Zigzag", "47", "var(--neutral2)", zigzag],

["Triangle", "25" , "var(--neutral1)", triangle],

["Diamond", "22", "var(--neutral3)", diamond],
  
["Rhombus", "20", "var(--neutral2)", rhombus],
  
["Circle", "5", "var(--neutral1)", circle],
  
["Half-circle", "5" , "var(--neutral3)", halfcircle],
  
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