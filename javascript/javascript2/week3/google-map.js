// Create a button with the text called "Log location". When this button is clicked
// the location (latitude, longitude) of the user should be logged out using this browser api
const btnLocation = document.getElementById('log-location');
const status = document.getElementById('status');
const positionLatitude = document.getElementById('position-latitude');
const positionLongitude = document.getElementById('position-longitude');


function myPosition() {

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            positionLatitude.textContent = `This is the latitude: ${latitude}`;
            positionLongitude.textContent = `This is the longitude: ${longitude}`;
            
        });
          } else {
            status.textContent = 'Unable to retrieve your location';
        }
}


btnLocation.addEventListener('click', myPosition);

//api key AIzaSyDO4ipzgieNMSSgfjXqUUEd1ekJngtkjyw

var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
        });
    }