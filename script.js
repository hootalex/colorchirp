console.log("Haha, hahahaha!")

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAe3wNXTXNl4KQ1pVuVkWE5NAmRE66yCtw",
    authDomain: "birdsong-survey.firebaseapp.com",
    databaseURL: "https://birdsong-survey-default-rtdb.firebaseio.com",
    projectId: "birdsong-survey",
    storageBucket: "birdsong-survey.appspot.com",
    messagingSenderId: "753388476054",
    appId: "1:753388476054:web:83910c18708179edbed4b7"
};

firebase.initializeApp(config);

var messagesRef = firebase.database().ref("messages");

const birds =  [
   {
    "name": "Common Loon",
    "url" : "https://cdn.glitch.global/457b3231-6ea2-4da0-a5e5-e4f8765ce99d/XC432766%20-%20Common%20Loon%20-%20Gavia%20immer_trimmed.mp3?v=1658622933181",
    "copyright" : "Stanislas Wroza",
    "xenolink": "https://xeno-canto.org/432766"
  }
]

var bird = birds[0].name
var color = null
var shape = null

var sound = new Howl({
  src: [birds[0].url],
  html5: true,
  onend: function() {
    $("#play").removeClass("disable")
    $("#play").html("Play bird sound");
    $(".screen").removeClass("locked");
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
  
  color = $(this).attr("color");
  console.log(color)
  
});

$( ".shape" ).on( "click", function( event ) {
  $(".shape").removeClass("selected")
  shape = $(this).attr("shape");
  console.log(shape)
  $(this).addClass("selected")
});

$( "#play" ).on( "click", function( event ) {
sound.play();
  $("#play").addClass("disable");
  $("#play").html("Playing sound...");
  });

$(".credit").html("Sound recorded by " + "<a href='"+birds[0].xenolink+"'>"+birds[0].copyright+"</a>")

$( "#submit" ).on( "click", function( event ) {
  
    var newMessageRef = messagesRef.push();
  
  newMessageRef.set({
    bird: bird,
    color: color,
    shape: shape
  })
  
  setTimeout(() => {
    window.location.replace("submitted.html");
}, "500")
  
$("#submit").addClass("disable");


});