const birds =  [
   {
    "name": "Common Loon",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC432766%20-%20Common%20Loon%20-%20Gavia%20immer.mp3?v=1658608941259",
    "copyright" : "Stanislas Wroza",
    "xenolink": "https://xeno-canto.org/432766"
  }
]

var maincolor = "transparent"




var sound = new Howl({
  src: [birds[0].url],
  html5: true,
  onend: function() {
    $("#play").removeClass("disable")
    $("#play").html("Play bird sound");
  }
});

$( ".color" ).on( "click", function( event ) {
  $(".color").removeClass("selected")
  $(this).addClass("selected")
  maincolor = $(this).css("background-color")
  $(".shape>svg").css("fill", maincolor)
  $("#submit").css("background-color", maincolor)
  $("#submit").css("border", "1px solid "+maincolor)
  $(".container").css("border-top", "5px solid "+maincolor)
  
});

$( ".shape" ).on( "click", function( event ) {
  $(".shape").removeClass("selected")
  $(this).addClass("selected")
});

$( "#play" ).on( "click", function( event ) {
sound.play();
  $("#play").addClass("disable");
  $("#play").html("Playing sound...");
  });

$(".credit").html("Sound recorded by " + "<a href='"+birds[0].xenolink+"'>"+birds[0].copyright+"</a>")