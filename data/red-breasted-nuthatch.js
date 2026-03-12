var responses = 327
var topcolor = "Orange"
var topshape = "kiki"

$("#winner").html(kiki)
$("#winner svg").css("fill","var(--orange)")

const birds =  [
   {
 "name": "Turkey Vulture",
"url" : "https://colorchirp.com/glitch-assets/XC520288 - Turkey Vulture - Cathartes aura_01.mp3?v=1667176929960",
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
  
["Orange", "73" , "var(--orange)"],
["Yellow", "64" , "var(--yellow)"],
["Green", "42", "var(--green)"],
["Brown", "37", "var(--brown)"],
["Red", "33", "var(--red)"],
["Pink", "23", "var(--pink)"],
["Light blue", "17", "var(--lightblue)"],
["Purple", "16", "var(--purple)"],
["Black", "11", "var(--black)"],
["Blue", "11", "var(--blue)"]
];
  
var shapechart = [
  
["Kiki", "86", "var(--neutral3)", kiki],
["Zigzag", "67", "var(--neutral2)", zigzag],
["Rhombus", "40", "var(--neutral1)", rhombus],
["Triangle", "29" , "var(--neutral3)", triangle],
["Diamond", "25", "var(--neutral2)", diamond],
["Half-circle", "22" , "var(--neutral1)", halfcircle],
["Bouba", "16", "var(--neutral3)", bouba],
["Wave", "14", "var(--neutral2)", wave],
["Line", "13", "var(--neutral1)", line],
["Square", "7", "var(--neutral3)", square],
["Loop", "6", "var(--neutral2)", loop],
["Circle", "2", "var(--neutral1)", circle]
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