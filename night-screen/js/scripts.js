
/***THIS FILE REQUIRE JQUERY***/

var isFullscreen = false;

$("#open-fullscreen-btn").click(function () {
  openFullscreen();
  fullscreenClass();
});
$("#close-fullscreen-btn").click(function () {
  closeFullscreen();
});

/*This insures that the close function still runs when pressing escape.*/
document.addEventListener("fullscreenchange", function() {
  isFullscreen = !isFullscreen;
  if (isFullscreen == false) {
    browserClass();
  }
});

//Fullscreen functions
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function fullscreenClass() {
  $("#open-fullscreen-btn").removeClass("active");
  $("#close-fullscreen-btn").addClass("active");
}
function browserClass() {
  $("#close-fullscreen-btn").removeClass("active");
  $("#open-fullscreen-btn").addClass("active");
}
