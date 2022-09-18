var responses = 796
var topcolor = "Purple"
var topshape = "bouba"

$("#winner").html(bouba)
$("#winner svg").css("fill","var(--purple)")

const birds =  [
   {
    "name": "Eastern Screech-Owl",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC624995%20-%20Eastern%20Screech%20Owl%20-%20Megascops%20asio_01-trimmed.mp3?v=1661090754291",
    "copyright" : "Michael & Katie LaTour",
    "xenolink": "https://xeno-canto.org/624995"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Purple", "42", "var(--purple)"],
  
["Blue", "37", "var(--blue)"],
  
["Brown", "21", "var(--brown)"],
  
["Light blue", "15", "var(--lightblue)"],
  
["Black", "13", "var(--black)"],
  
["Green", "12", "var(--green)"],

["Orange", "7" , "var(--orange)"],

["Pink", "7", "var(--pink)"],
  
["Yellow", "2" , "var(--yellow)"],
  
["Red", "0", "var(--red)"]

];
  
var shapechart = [
  
["Bouba", "45", "var(--neutral1)", bouba],
  
["Zigzag", "28", "var(--neutral2)", zigzag],
  
["Wave", "27", "var(--neutral1)", wave],
  
["Circle", "21", "var(--neutral3)", circle],
  
["Line", "13", "var(--neutral1)", line],
  
["Half-circle", "13" , "var(--neutral2)", halfcircle],
  
["Triangle", "2" , "var(--neutral3)", triangle],
  
["Kiki", "2", "var(--neutral1)", kiki],
  
["Square", "2", "var(--neutral3)", square],
  
["Rhombus", "1", "var(--neutral2)", rhombus],
  
["Loop", "1", "var(--neutral3)", loop],

["Diamond", "1", "var(--neutral2)", diamond]

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