var maincolor = "transparent"

$( ".color" ).on( "click", function( event ) {
  $(".color").removeClass("selected")
  $(this).addClass("selected")
  maincolor = $(this).css("background-color")
  $(".shape>svg").css("fill", maincolor)
  
  if (maincolor == "rgb(255, 255, 255)") {
    $(".shape").css("background-color","#9e9696")
  } else {
    $(".shape").css("background-color","transparent")
  }
});

$( ".shape" ).on( "click", function( event ) {
  $(".shape").removeClass("selected")
  $(this).addClass("selected")
});