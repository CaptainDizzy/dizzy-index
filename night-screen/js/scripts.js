/***THIS FILE REQUIRES JQUERY***/

/***Fullscreen Handling***/
var isFullscreen = false;

$("#open-fullscreen-btn").click(function () {
  openFullscreen();
  fullscreenClass();
});
$("#close-fullscreen-btn").click(function () {
  closeFullscreen();
});

/*This insures that the close function still runs when pressing escape.*/
document.addEventListener("fullscreenchange", function () {
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
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
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

/***Random Eyes***/

var toggleEyes = "on";

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function initEyes() {
  if (toggleEyes == "on") {
    let xVect = getRandomInt(3, 86);
    let yVect = getRandomInt(5, 91);
    let scale = getRandomInt(25, 126);
    let opacity = getRandomInt(15, 81);
    $("#eye-left").css("left", xVect + "vw");
    $("#eye-left").css("top", yVect + "vh");
    $("#eye-right").css("left", "calc(" + xVect + "vw + " + 125 * (scale / 100) + "px)");
    $("#eye-right").css("top", yVect + "vh");
    $(".eyes").css("scale", scale + "%");
    $(".eyes").css("opacity", opacity + "%");
    console.log(
      "Eyes reset - position: " + xVect + "vw, " + yVect + "vh | scale: " + scale + "% | opacity: " + opacity + "%"
    );
    openEyes();
  } else {
    console.log("Eyes turned off.");
  }
}

function openEyes() {
  $(".eyes").removeClass("closed");
  $(".eyes").addClass("open");
  let randomDelay = getRandomInt(3000, 15001);
  console.log("Eyes are open. closeEyes() will execute in " + randomDelay / 1000 + " seconds.");
  setTimeout(closeEyes, randomDelay);
}
function closeEyes() {
  $(".eyes").removeClass("open");
  $(".eyes").addClass("closed");
  let randomDelay = getRandomInt(5000, 30001);
  console.log("Eyes are closed. Eyes will reset in " + randomDelay / 1000 + " seconds.");
  setTimeout(initEyes, randomDelay);
}

initEyes();

$("#eyes-on-btn").click(function () {
  $(".eyes").removeClass("open");
  $(".eyes").addClass("closed");
  $("#eyes-on-btn").removeClass("active");
  $("#eyes-off-btn").addClass("active");
  console.log("Turning off eyes.");
  toggleEyes = "off";
});
$("#eyes-off-btn").click(function () {
  $(".eyes").removeClass("closed");
  $(".eyes").addClass("open");
  $("#eyes-off-btn").removeClass("active");
  $("#eyes-on-btn").addClass("active");
  console.log("Turning on eyes.");
  toggleEyes = "on";
  initEyes();
});
