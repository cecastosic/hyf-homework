//let url = "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=b3239c7eaddeb6dd2ef7235478b440d9";
let url = "";

function fetchData(url) {
  return fetch(url).then(response => response.json());
  // .then(data => {
  //  console.log(data);
  //  });
}

const input = document.getElementById("city");
const btn = document.getElementById("btn-city");

btn.addEventListener("click", () => {
  if (input.value) {
    const valueCity = input.value.toLowerCase();
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      valueCity +
      "&appid=b3239c7eaddeb6dd2ef7235478b440d9";
    fetchData(url).then(data => renderData(data));
  }
});

//const fetchedData = fetchData(url).then(data => renderData(data));

function renderData(data) {
  resetView();

  const div = document.getElementById("weather-data");
  div.className = "visible";

  // The chosen city
  const cityName = document.createElement("h1");
  div.appendChild(cityName);

  if (data.name === undefined) cityName.innerHTML = `Wrong city name`;
  else cityName.innerHTML = data.name;
  for (weather of data.weather) {
    const pW = document.createElement("p");
    pW.className = "bold";
    const img = document.createElement("img");
    // const pD = document.createElement('p');
    div.appendChild(pW);
    div.appendChild(img);
    // div.appendChild(pD);

    // Icon for the weather type
    img.src = "http://openweathermap.org/img/wn/" + weather.icon + ".png";
    pW.innerHTML = weather.main;
    // pD.innerHTML = weather.description;

    if (weather.main === "Clear") {
      document.body.style.backgroundImage = "url('images/sunny.jpg')";
    } else if (weather.main === "Clouds") {
      document.body.style.backgroundImage = "url('images/cloudy.jpg')";
    } else if (weather.main === "Drizzle") {
      document.body.style.backgroundImage = "url('images/drizzle.jpg')";
    } else if (weather.main === "Rain") {
      document.body.style.backgroundImage = "url('images/rain.jpg')";
    } else if (weather.main === "Thunderstorm") {
      document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    } else if (weather.main === "Snow") {
      document.body.style.backgroundImage = "url('images/snow.jpg')";
    } else if (
      weather.main === "Mist" ||
      weather.main === "Haze" ||
      weather.main === "Sand" ||
      weather.main === "Ash" ||
      weather.main === "Fog" ||
      weather.main === "Dust"
    ) {
      document.body.style.backgroundImage = "url('images/fog.jpg')";
    } else if (weather.main === "Tornado") {
      document.body.style.backgroundImage = "url('images/tornado.jpg')";
    } else if (weather.main === "Squall") {
      document.body.style.backgroundImage = "url('images/squall.jpg')";
    } else {
      document.body.style.backgroundImage = "url('images/clear-sky.jpg')";
    }
  }

  const pItem = document.createElement("p");
  pItem.className = "temp";
  div.appendChild(pItem);

  // Temperature
  Object.keys(data.main).forEach(function(item) {
    if (item === "temp") {
      const currentTemp = (data.main[item] - 273.15).toFixed(0);
      pItem.innerHTML = `${currentTemp} °C`;
    }
  });

  // Wind speed
  const pWind = document.createElement("p");
  div.appendChild(pWind);
  pWind.innerHTML = `Wind speed: ${data.wind.speed}m/s`;

  // How clowdy it is
  const pClouds = document.createElement("p");
  div.appendChild(pClouds);
  pClouds.innerHTML = `Cloudiness: ${data.clouds.all}%`;

  // When sunrise and sunset is
  const pSunrise = document.createElement("p");
  const pSunset = document.createElement("p");
  div.appendChild(pSunrise);
  div.appendChild(pSunset);
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  pSunrise.innerHTML = `Sunrise: ${sunrise}`;
  pSunset.innerHTML = `Sunset: ${sunset}`;

  // Optional a map showing where the city is located
  const mainDiv = document.getElementById("main");
  const mapDiv = document.createElement("div");
  mapDiv.classList.add = "map";
  mainDiv.appendChild(mapDiv);
  // const latitude = data.coord.lat;
  // const longitude = data.coord.lon;
  mapDiv.innerHTML = `<div style="width: 100%"><iframe width="500" height="300" src="https://maps.google.com/maps?q=${data.name}&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
}

function resetView() {
  const resultsDiv = document.querySelector("#main");
  resultsDiv.innerHTML = "";
  const div = document.createElement("div");
  div.id = "weather-data";
  resultsDiv.appendChild(div);
}

// Add a button to your page, clicking this button will get the users current position. 
// Use that position to fetch weather data from that position.

const btnPosition = document.getElementById("btn-position");

btnPosition.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //console.log(latitude, longitude);

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b3239c7eaddeb6dd2ef7235478b440d9`;
    fetchData(url).then(data => renderData(data));
    input.value = "";
  });
});


// When a user has gotten a location through either the input element or the geo location api, save that location using localstorage. 
// Localstorage is a way to save data even when you close the browser.
// Now when loading the page and there is a city in the localstorage, use that to get the current weather.
function showSavedLocation() {
    navigator.geolocation.watchPosition((position) => {
        const savedPosition = [];
        savedPosition.push(position.coords.latitude);
        savedPosition.push(position.coords.longitude);
        
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${savedPosition[0]}&lon=${savedPosition[1]}&appid=b3239c7eaddeb6dd2ef7235478b440d9`;
        fetchData(url).then(data => renderData(data));
    });
}

//window.addEventListener('load', showSavedLocation());