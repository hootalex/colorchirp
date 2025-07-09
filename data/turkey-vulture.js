var responses = 273
var topcolor = "Black"
var topshape = "zigzag"

$("#winner").html(zigzag)
$("#winner svg").css("fill","var(--black)")

const birds =  [
   {
 "name": "Turkey Vulture",
    "url" : "glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC520288%20-%20Turkey%20Vulture%20-%20Cathartes%20aura_01.mp3?v=1667176929960",
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
  
["Black", "114", "var(--black)"],
  
["Brown", "76", "var(--brown)"],
  
["Blue", "14", "var(--blue)"],
  
["Red", "13", "var(--red)"],
  
["Orange", "13" , "var(--orange)"],
  
["Purple", "12", "var(--purple)"],
  
["Light blue", "11", "var(--lightblue)"],
  
["Yellow", "8" , "var(--yellow)"],
  
["Green", "8", "var(--green)"],
  
["Pink", "2", "var(--pink)"],

];
  
var shapechart = [
  
["Zigzag", "84", "var(--neutral3)", zigzag],
  
["Line", "51", "var(--neutral2)", line],
  
["Kiki", "47", "var(--neutral1)", kiki],
  
["Rhombus", "24", "var(--neutral3)", rhombus],
  
["Half-circle", "11" , "var(--neutral2)", halfcircle],
  
["Bouba", "10", "var(--neutral1)", bouba],
  
["Wave", "10", "var(--neutral3)", wave],
  
["Triangle", "9" , "var(--neutral2)", triangle],
  
["Square", "9", "var(--neutral1)", square],
  
["Loop", "6", "var(--neutral3)", loop],
  
["Diamond", "6", "var(--neutral2)", diamond],
  
["Circle", "5", "var(--neutral1)", circle],

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