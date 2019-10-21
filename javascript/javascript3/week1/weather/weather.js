//let url = "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=b3239c7eaddeb6dd2ef7235478b440d9";
let url = '';

function fetchData(url) {
    return fetch(url).then(response => response.json())
        // .then(data => {
        //  console.log(data);
        // });
}


const input = document.getElementById('city');
const btn = document.getElementById('btn-city')

btn.addEventListener('click', () => {
    if (input.value) {
        const valueCity = input.value.toLowerCase();
        url = "https://api.openweathermap.org/data/2.5/weather?q=" + valueCity + "&appid=b3239c7eaddeb6dd2ef7235478b440d9";
        fetchData(url).then(data => renderData(data));
    } 
});

//const fetchedData = fetchData(url).then(data => renderData(data));

function renderData(data) {
    resetView();

    const div = document.getElementById('weather-data');
    // The chosen city

    const cityName = document.createElement('h1');
    div.appendChild(cityName);
    cityName.innerHTML = data.name;


    for (weather of data.weather) {
        const pW = document.createElement('p');
        const img = document.createElement('img');
        const pD = document.createElement('p');
        div.appendChild(pW);
        div.appendChild(img);
        div.appendChild(pD);

        // Icon for the weather type
        img.src = "http://openweathermap.org/img/wn/" + weather.icon + ".png";
        pW.innerHTML = weather.main;
        pD.innerHTML = weather.description;
    }

    // Temperature
    Object.keys(data.main).forEach(function (item) {
        const pItem = document.createElement('p');
        div.appendChild(pItem);
        pItem.innerHTML = `${item}: ${data.main[item]}`;
    });

    // Wind speed
    const pWind = document.createElement('p');
    div.appendChild(pWind);
    pWind.innerHTML = `Wind speed: ${data.wind.speed}`;

    // How clowdy it is
    const pClouds = document.createElement('p');
    div.appendChild(pClouds);
    pClouds.innerHTML = `Clouds: ${data.clouds.all}%`;


    // When sunrise and sunset is
    const pSunrise = document.createElement('p');
    const pSunset = document.createElement('p');
    div.appendChild(pSunrise);
    div.appendChild(pSunset);
    const sunrise = (new Date(data.sys.sunrise * 1000)).toLocaleTimeString();
    const sunset = (new Date(data.sys.sunset * 1000)).toLocaleTimeString();
    pSunrise.innerHTML = `Sunrise: ${sunrise}`;
    pSunset.innerHTML = `Sunset: ${sunset}`;
    
    // Optional a map showing where the city is located
    const map = document.createElement('div');
    map.classList.add = 'map'
    div.appendChild(map);
    const latitude = data.coord.lat;
    const longitude = data.coord.lon;
    console.log(latitude);
    console.log(longitude);

    map.innerHTML = `<div style="width: 100%"><iframe width="800" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${latitude},${longitude}&amp;q=+(location)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;

}


function resetView() {
    const resultsDiv = document.querySelector('#weather-data');
    resultsDiv.innerHTML = '';
  }
  