// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const f = () =>
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2.5 * 1000);

//f();

// document.addEventListener('DOMContentLoaded', (event) => {
//     f();
// })

// Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

const logStringWithDelay = (delay, stringToLog) => {
  setTimeout(() => {
    p.textContent = stringToLog;
    console.log(stringToLog);
  }, delay * 1000);
};

//logStringWithDelay(3, 'This string logged after 3 seconds');
//logStringWithDelay(10, '10 seconds has just passed');

//Create a button in html. When clicking this button, use the function you created in the previous task
//to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const btn = document.getElementById("click-me");
const p = document.getElementById("p-click-me");

btn.addEventListener("click", function() {
  logStringWithDelay(5, "Called after 5 seconds");
});

// Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

const earthLog = () => console.log("Earth");
const saturnLog = () => console.log("Saturn");

const planetLog = planetLogFunction => planetLogFunction();

planetLog(earthLog);
planetLog(saturnLog);

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

// Create a function called runAfterDelay. It has two parameters: delay and callback. 
// When called the function should wait delay seconds and then call the provided callback function. 
// Try and call this function with different delays and different callback functions


    
  

function runAfterDelay(delay2, callback) {
    setTimeout(() => {
        callback();
    }, delay2 * 1000);
  
}

runAfterDelay(4, function() {
    console.log('should be logged after 4 seconds');
});

runAfterDelay(10, function() {
    let answer = 5+5;
    answer++;
    console.log(answer);
});

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
// If a double click has been detected, log out the text: "double click!"

window.addEventListener('dblclick', () => console.log('Double click!'));

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
// logFunnyJoke - function and logBadJoke - function. 
// If you set tellFunnyJoke to true it should call the logFunnyJoke function 
// that should log out a funny joke. And vice versa.
const funnyJokes = [
    'I told my girlfriend she drew her eyebrows too high. She seemed surprised.',
    'My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.',
    'I am so good at sleeping. I can do it with my eyes closed.',
    'My boss told me to have a good day.. so I went home.',
    'Why is Peter Pan always flying? He neverlands',
    'When you look really closely, all mirrors look like eyeballs.',
    'I could not figure out why the baseball kept getting larger. Then it hit me.',
    'I know a lot of jokes about unemployed people but none of them work.',
    'Did you hear about the italian chef that died? He pasta way.'
];

const badJokes = [
    'What do you call a bear without any teeth?A gummy bear!',
    'How do you make holy water? You boil the hell out of it.',
    'What do you get when you cross a snowman with a vampire? Frostbite.',
    'What does a zombie vegetarian eat? GRRRAAAIIINNNNS!',
    'What is at the bottom of the ocean and shivers? A nervous wreck!',
    'How did Darth Vader know what Luke got him for Christmas?He felt his presents!',
    'What do you call someone with no body and no nose?Nobody knows!',
    'What do prisoners use to call each other? Cell phones!'
];

const funnyJoke = document.getElementById('funny-joke');
const badJoke = document.getElementById('bad-joke');
const pFunny = document.getElementById('p-funny');
const pBad = document.getElementById('p-bad');


function randomNumber(array) {
    let random = Math.floor(Math.random() * (array.length - 1));
    return random;
}

function logFunnyJoke() {
    console.log(funnyJokes[randomNumber(funnyJokes)]);
    return funnyJokes[randomNumber(funnyJokes)];
}

function logBadJoke() {
    console.log(badJokes[randomNumber(badJokes)]);
    return badJokes[randomNumber(badJokes)];
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) pFunny.textContent = this.logFunnyJoke();
    else pBad.textContent = this.logBadJoke();
}


funnyJoke.addEventListener('click', () => jokeCreator(true));
badJoke.addEventListener('click',() => jokeCreator(false));