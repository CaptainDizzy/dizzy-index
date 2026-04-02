//This script obviously uses JQuery.
$(function() {
  updateClock(); //Call the function first thing.
  setInterval('updateClock()', 1000); //Call the function every second after that.
});

function updateClock() {
  var currentTime = new Date();
  var currentTimeString = currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
