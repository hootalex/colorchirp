$( ".color" ).on( "click", function( event ) {
  $(".color").removeClass("selected")
  if ($(this).hasClass("selected")) { 
     $(".color").removeClass("selected")
  } else {
  $(this).addClass("selected")
  }
});