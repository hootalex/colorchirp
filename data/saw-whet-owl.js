var responses = 162
var topcolor = "Light blue"
var topshape = "circle"

$("#winner").html(circle)
$("#winner svg").css("fill","var(--lightblue)")

const birds =  [
   {
    "name": "Saw-whet owl",
    "url" : "glitch-assets/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC533407%20-%20Northern%20Saw-whet%20Owl%20-%20Aegolius%20acadicus_01.mp3?v=1676915412199",
    "copyright" : "Will Sweet",
    "xenolink": "https://xeno-canto.org/533407"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [

["Light blue", "34", "var(--lightblue)"],
  
["Purple", "24", "var(--purple)"],

["Red", "18", "var(--red)"],

["Yellow", "18" , "var(--yellow)"],

["Green", "17", "var(--green)"],
  
["Blue", "15", "var(--blue)"],

["Pink", "13", "var(--pink)"],

["Orange", "12" , "var(--orange)"],

["Brown", "10", "var(--brown)"],

["Black", "1", "var(--black)"]

];
  
var shapechart = [

["Circle", "28", "var(--neutral1)", circle],
  
["Bouba", "26", "var(--neutral2)", bouba],
  
["Zigzag", "21", "var(--neutral3)", zigzag],
  
["Wave", "16", "var(--neutral1)", wave],

["Half-circle", "14" , "var(--neutral2)", halfcircle],
  
["Line", "12", "var(--neutral3)", line],
  
["Kiki", "12", "var(--neutral1)", kiki],

["Diamond", "10", "var(--neutral2)", diamond],
  
["Loop", "9", "var(--neutral3)", loop],

["Triangle", "8" , "var(--neutral1)", triangle],

["Rhombus", "5", "var(--neutral2)", rhombus],

["Square", "0", "var(--neutral3)", square],

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