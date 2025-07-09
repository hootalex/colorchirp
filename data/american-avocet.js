var responses = 269
var topcolor = "Yellow"
var topshape = "kiki"

$("#winner").html(kiki)
$("#winner svg").css("fill","var(--yellow)")

const birds =  [
   {
    "name": "American Avocet",
    "url" : "glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC304446%20-%20American%20Avocet%20-%20Recurvirostra%20americana_01-trim.mp3?v=1659811679446",
    "copyright" : "Paul Marvin",
    "xenolink": "https://xeno-canto.org/304446"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Yellow", "71" , "var(--yellow)"],
  
["Light blue", "56", "var(--lightblue)"],
  
["Orange", "45" , "var(--orange)"],
  
["Red", "24", "var(--red)"],
  
["Green", "22", "var(--green)"],
  
["Purple", "15", "var(--purple)"],
  
["Pink", "14", "var(--pink)"],
  
["Blue", "8", "var(--blue)"],
  
["Brown", "7", "var(--brown)"],
  
["Black", "6", "var(--black)"],

];
  
var shapechart = [
  
["Kiki", "94", "var(--neutral3)", kiki],
  
["Triangle", "66" , "var(--neutral1)", triangle],
  
["Zigzag", "41", "var(--neutral2)", zigzag],
  
["Rhombus", "18", "var(--neutral1)", rhombus],
  
["Diamond", "18", "var(--neutral2)", diamond],
  
["Loop", "8", "var(--neutral3)", loop],
  
["Bouba", "7", "var(--neutral2)", bouba],

["Line", "6", "var(--neutral1)", line],
  
["Half-circle", "5" , "var(--neutral2)", halfcircle],
  
["Circle", "3", "var(--neutral3)", circle],
  
["Square", "3", "var(--neutral3)", square],
  
["Wave", "0", "var(--neutral1)", wave],

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