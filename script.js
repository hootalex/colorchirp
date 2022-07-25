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
  
  $("#winner").html(loop)
  $("#winner svg").css("fill","var(--blue)")
  
  $("#wincolor").html("Blue")
  $("#winshape").html("loop")

    
var colorchart = [

["Red", "8", "var(--red)"],

["Orange", "27" , "var(--orange)"],

["Yellow", "30" , "var(--yellow)"],

["Green", "36", "var(--green)"],

["Light blue", "88", "var(--lightblue)"],

["Blue", "113", "var(--blue)"],

["Purple", "105", "var(--purple)"],

["Pink", "7", "var(--pink)"],

["Brown", "103", "var(--brown)"],

["Black", "94", "var(--black)"]

];
  
var shapechart = [

["Circle", "62", "var(--neutral1)", circle],

["Half-circle", "136" , "var(--neutral2)", halfcircle],

["Triangle", "19" , "var(--neutral3)", triangle],

["Square", "3", "var(--neutral1)", square],

["Diamond", "9", "var(--neutral2)", diamond],

["Rhombus", "32", "var(--neutral3)", rhombus],

["Bouba", "26", "var(--neutral1)", bouba],

["Kiki", "7", "var(--neutral2)", kiki],

["Loop", "238", "var(--neutral3)", loop],

["Line", "3", "var(--neutral1)", line],
  
["Wave", "75", "var(--neutral2)", wave],
  
["Zigzag", "4", "var(--neutral3)", zigzag],

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