var responses = 163
var topcolor = "Yellow"
var topshape = "Loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--yellow)")

const birds =  [
   {
 "name": "Carolina Wren",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC713784%20-%20Carolina%20Wren%20-%20Thryothorus%20ludovicianus_01.mp3?v=1664118396595",
    "copyright" : "Bobby Wilcox",
    "xenolink": "https://xeno-canto.org/713784"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Yellow", "59" , "var(--yellow)"],
  
["Light blue", "30", "var(--lightblue)"],
  
["Pink", "23", "var(--pink)"],
  
["Orange", "16" , "var(--orange)"],
  
["Green", "10", "var(--green)"],
   
["Red", "10", "var(--red)"],
  
["Purple", "6", "var(--purple)"],
  
["Brown", "5", "var(--brown)"],
  
["Blue", "3", "var(--blue)"],
  
["Black", "1", "var(--black)"],

];
  
var shapechart = [
  
["Loop", "41", "var(--neutral3)", loop],
  
["Bouba", "35", "var(--neutral2)", bouba],
  
["Zigzag", "25", "var(--neutral1)", zigzag],
  
["Wave", "18", "var(--neutral3)", wave],
  
["Kiki", "16", "var(--neutral2)", kiki],
  
["Triangle", "9" , "var(--neutral1)", triangle],
  
["Circle", "7", "var(--neutral3)", circle],
  
["Diamond", "6", "var(--neutral2)", diamond],
  
["Rhombus", "5", "var(--neutral1)", rhombus],

["Half-circle", "2" , "var(--neutral3)", halfcircle],

["Square", "0", "var(--neutral2)", square],
  
["Line", "0", "var(--neutral1)", line],

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