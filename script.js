const birds =  [
   {
    "name": "Common Loon",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC432766%20-%20Common%20Loon%20-%20Gavia%20immer.mp3?v=1658608941259",
    "copyright" : "Stanislas Wroza",
    "xeno-link": "https://xeno-canto.org/432766",
    "code": "1"
  }
]

var maincolor = "transparent"




var sound = new Howl({
  src: [birds[0].url],
  html5: true,
  onend: function() {
    $("#play").removeClass("disable")
    $("#play").html("Play ");
  }
});

$( ".color" ).on( "click", function( event ) {
  $(".color").removeClass("selected")
  $(this).addClass("selected")
  maincolor = $(this).css("background-color")
  $(".shape>svg").css("fill", maincolor)
  
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

