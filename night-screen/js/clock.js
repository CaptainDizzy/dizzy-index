//This script obviously uses JQuery.
$(function() {
  updateClock(); //Call the function first thing.
  setInterval('updateClock()', 1000); //Call the function every second after that.
});

function updateClock() {
  var currentDate = new Date();
  var currentTimeString = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  var currentDateString = currentDate.toLocaleDateString('en-US', {month: "long", day: "numeric", year: "numeric"});
  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("date").firstChild.nodeValue = currentDateString;
}