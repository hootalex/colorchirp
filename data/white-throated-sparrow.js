var responses = 169
var topcolor = "Yellow"
var topshape = "loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--yellow)")

const birds =  [
   {
 "name": "Turkey Vulture",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC520288%20-%20Turkey%20Vulture%20-%20Cathartes%20aura_01.mp3?v=1667176929960",
    "copyright" : "Cristian Pinto",
    "xenolink": "https://xeno-canto.org/520288",
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
  
["Black", "3", "var(--black)"],
  
["Brown", "2", "var(--brown)"],
  
["Blue", "1", "var(--blue)"],
  
["Red", "4", "var(--red)"],
  
["Orange", "9" , "var(--orange)"],
  
["Purple", "9", "var(--purple)"],

];
  
var shapechart = [
  
["Zigzag", "25", "var(--neutral3)", zigzag],
  
["Line", "9", "var(--neutral2)", line],
  
["Kiki", "7", "var(--neutral1)", kiki],
  
["Rhombus", "9", "var(--neutral3)", rhombus],
  
["Half-circle", "11" , "var(--neutral2)", halfcircle],
  
["Bouba", "13", "var(--neutral1)", bouba],
  
["Wave", "23", "var(--neutral3)", wave],
  
["Triangle", "5" , "var(--neutral2)", triangle],
  
["Square", "1", "var(--neutral1)", square],
  
["Loop", "54", "var(--neutral3)", loop],
  
["Diamond", "10", "var(--neutral2)", diamond],
  
["Circle", "2", "var(--neutral1)", circle],

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