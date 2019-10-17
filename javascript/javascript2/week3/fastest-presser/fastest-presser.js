// Create an input and a button in html. When the button is clicked, get the value of the input.
// This value will be the amount of time the game should run.
let counterS = 0;
let counterL = 0;
let gameOver = false;

const input = document.getElementById("duration");
const btn = document.getElementById("start-btn");
const hGameOver = document.getElementById("game-over");
hGameOver.style.display = "none";
const hPlayerS = document.querySelector("#player-s > h3");
const hPlayerL = document.querySelector("#player-l > h3");

const pCounterS = document.getElementById("counter-s");
const pCounterL = document.getElementById("counter-l");

let confettiSettings = { target: "canvas-section" };
let confetti = new ConfettiGenerator(confettiSettings);

function startPosition() {
  gameOver = false;
  hGameOver.style.display = "none";
  hPlayerL.textContent = "Press L";
  hPlayerS.textContent = "Press S";
  counterS = 0;
  counterL = 0;
  pCounterS.textContent = counterS;
  pCounterL.textContent = counterL;
  confetti.clear();
  clearInterval(setIntervalF);
  counter.style.display = "block";
}

const timeout = () => {
  setTimeout(() => {
    console.log("The game is over!");
    gameOver = true;
    hGameOver.style.display = "block";
    counter.style.display = "none";

    if (counterS > counterL) {
      hPlayerS.textContent = "Winner!";
      hPlayerL.textContent = "Looser!";
      confettiSettings.target = "my-canvas-s";
      confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      console.log("Winner S");
    } else if (counterL > counterS) {
      hPlayerL.textContent = "Winner!";
      hPlayerS.textContent = "Looser!";
      confettiSettings.target = "my-canvas-l";
      confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      console.log("Winner L");
    } else if (counterL === 0 && counterS === 0) {
      hPlayerL.textContent = "No Winner!";
      hPlayerS.textContent = "No Winner!";
      console.log("Zero points, no winner");
    } else {
      hPlayerL.textContent = "Equal!";
      hPlayerS.textContent = "Equal!";
      confettiSettings.target = "canvas-section";
      confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      console.log("Equal");
    }
  }, input.value * 1000);
};

btn.addEventListener("click", () => {
  startPosition();
  if (input.value) {
    countdown();
    timeout();
  }
});

// Set a timeout for the time specified by the user.
// After that time has run out just log out a simple string.

// Create an event listener so you can call a function when any key is pressed.
// Now grap the actual key that was pressed. Fx was it a j or an i. We are interested in s and l.
// Keep a counter for how many times l and s was pressed.

window.addEventListener("keypress", event => {
  if (gameOver) return;
  if (input.value) {
    if (event.key === "s") {
      counterS++;
      pCounterS.textContent = counterS;
    } else if (event.key === "l") {
      counterL++;
      pCounterL.textContent = counterL;
    } else {
      console.log(event.key);
    }
  }
});

let setIntervalF = null;

function countdown() {
  const counter = document.getElementById("counter");
  let timer = input.value;

  let interval = function() {
    counter.textContent = `Counter: ${timer}`;
    if (timer === 0) return;
    timer--;
  };
  interval();

  setIntervalF = setInterval(interval, 1000);
}
