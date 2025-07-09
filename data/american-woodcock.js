var responses = 481
var topcolor = "Green"
var topshape = "zigzag"

$("#winner").html(zigzag)
$("#winner svg").css("fill","var(--green)")

const birds =  [
   {
 "name": "American Woodcock",
    "url" : "glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC709861%20-%20American%20Woodcock%20-%20Scolopax%20minor_01.mp3?v=1663518985200",
    "copyright" : "Joseph Fell",
    "xenolink": "https://xeno-canto.org/709861"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [
  
["Green", "118", "var(--green)"],
  
["Brown", "94", "var(--brown)"],
  
["Yellow", "92" , "var(--yellow)"],
  
["Orange", "76" , "var(--orange)"],
  
["Black", "29", "var(--black)"],
  
["Red", "19", "var(--red)"],
  
["Purple", "15", "var(--purple)"],
  
["Light blue", "15", "var(--lightblue)"],
  
["Pink", "10", "var(--pink)"],
  
["Blue", "9", "var(--blue)"],

];
  
var shapechart = [
  
["Zigzag", "135", "var(--neutral2)", zigzag],
  
["Kiki", "101", "var(--neutral1)", kiki],
  
["Triangle", "57" , "var(--neutral3)", triangle],
  
["Rhombus", "47", "var(--neutral2)", rhombus],
  
["Line", "36", "var(--neutral1)", line],
  
["Diamond", "27", "var(--neutral2)", diamond],
  
["Half-circle", "22" , "var(--neutral2)", halfcircle],
  
["Bouba", "18", "var(--neutral1)", bouba],
  
["Loop", "15", "var(--neutral3)", loop],
  
["Wave", "11", "var(--neutral1)", wave],
  
["Circle", "5", "var(--neutral3)", circle],

["Square", "4", "var(--neutral3)", square],

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