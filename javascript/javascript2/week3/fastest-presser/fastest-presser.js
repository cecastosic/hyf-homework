
// Create an input and a button in html. When the button is clicked, get the value of the input. 
// This value will be the amount of time the game should run.

const input = document.getElementById('duration');
const btn = document.getElementById('start-btn');


const timeout = () => {
    setTimeout(() => {
        console.log('The game is over!');
        if (counterS > counterL) {
            var confettiSettings = { target: 'my-canvas-s' };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            console.log('winner S');
        } else if (counterL > counterS) {
            var confettiSettings = { target: 'my-canvas-l' };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            console.log('winner L');
        } else console.log('equal');
    
    }, input.value * 1000);
};


btn.addEventListener('click', () => { 
    if (input.value) timeout();
});

// Set a timeout for the time specified by the user. 
// After that time has run out just log out a simple string.

// Create an event listener so you can call a function when any key is pressed. 
// Now grap the actual key that was pressed. Fx was it a j or an i. We are interested in s and l. 
// Keep a counter for how many times l and s was pressed.
let counterS = 0;
let counterL = 0;

const pCounterS = document.getElementById('counter-s');
const pCounterL = document.getElementById('counter-l');

window.addEventListener('keypress', (event) => {
    if (input.value) {
        if (event.key === 's') {
            counterS++;
            pCounterS.textContent = counterS;
        }
        else if (event.key === 'l') {
            counterL++;
            pCounterL.textContent = counterL;
        }
        else console.log(event.key);
    
        timeout();
        }

});

