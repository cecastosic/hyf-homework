// Create a button with the text called "Log location". When this button is clicked
// the location (latitude, longitude) of the user should be logged out using this browser api
const btnLocation = document.getElementById("log-location");
const status = document.getElementById("status");
const positionLatitude = document.getElementById("position-latitude");
const positionLongitude = document.getElementById("position-longitude");
const map = document.getElementById("map");

function myPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      positionLatitude.textContent = `This is the latitude: ${latitude}`;
      positionLongitude.textContent = `This is the longitude: ${longitude}`;
      map.innerHTML = `<div style="width: 100%"><iframe width="800" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${latitude},${longitude}&amp;q=+(My%20location)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
    });
  } else {
    status.textContent = "Unable to retrieve your location";
  }
}

btnLocation.addEventListener("click", myPosition);
