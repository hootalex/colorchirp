var responses = 719
var topcolor = "Brown"
var topshape = "loop"

$("#winner").html(loop)
$("#winner svg").css("fill","var(--brown)")

const birds =  [
   {
    "name": "Common Loon",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC432766%20-%20Common%20Loon%20-%20Gavia%20immer_trimmed.mp3?v=1658622933181",
    "copyright" : "Stanislas Wroza",
    "xenolink": "https://xeno-canto.org/432766"
  }
]

var colorcharttotal = 0
var shapecharttotal = 0

$( document ).ready(function() {
  
  $("#wincolor").html(topcolor)
  $("#winshape").html(topshape)
  $("#responses").html(responses)

    
var colorchart = [

["Red", "8", "var(--red)"],

["Orange", "35" , "var(--orange)"],

["Yellow", "33" , "var(--yellow)"],

["Green", "44", "var(--green)"],

["Light blue", "99", "var(--lightblue)"],

["Blue", "127", "var(--blue)"],

["Purple", "124", "var(--purple)"],

["Pink", "9", "var(--pink)"],

["Brown", "135", "var(--brown)"],

["Black", "97", "var(--black)"]

];
  
var shapechart = [

["Circle", "71", "var(--neutral1)", circle],

["Half-circle", "157" , "var(--neutral2)", halfcircle],

["Triangle", "25" , "var(--neutral3)", triangle],

["Square", "5", "var(--neutral1)", square],

["Diamond", "11", "var(--neutral2)", diamond],

["Rhombus", "37", "var(--neutral3)", rhombus],

["Bouba", "31", "var(--neutral1)", bouba],

["Kiki", "10", "var(--neutral2)", kiki],

["Loop", "271", "var(--neutral3)", loop],

["Line", "3", "var(--neutral1)", line],
  
["Wave", "89", "var(--neutral2)", wave],
  
["Zigzag", "5", "var(--neutral3)", zigzag],

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