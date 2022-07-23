var maincolor = "transparent"

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