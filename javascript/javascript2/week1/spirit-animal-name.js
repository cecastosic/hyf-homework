const btn = document.getElementById('get-spiritual');
const input = document.getElementById('input');
const p = document.getElementById('spiritual-name');
const selection = document.getElementById('select-option').value;

const spiritualNames = ['The fullmoon wolf', 'The fearless tiger', 'The crying butterfly', 'The forest rabit', 'The yelling monkey', 'The strong deer', 'The talking snake', 'The beautiful cow', 'The dancing bear', 'The happy duck'];
const number = Math.floor(Math.random() * 10);


if (!input.value) {
    p.textContent = `Enter your name first`;
}

btn.addEventListener('click', function () {
        takeName(input.value, 'click-btn');
});

input.addEventListener('mouseover', function () {
    takeName(input.value, 'hover-input');
});

input.addEventListener('input', function () {
    takeName(input.value, 'text-written');
});

function takeName(value, wantedSelection) {
    const selection = document.getElementById('select-option').value;

    if (selection === wantedSelection && value) {
        const name = value;
        p.textContent = `${name} - ${spiritualNames[number]}`;
        return p.textContent;
    }
}


//Now a user tells us that he wants a new spirit animal. No problem we say. 
//Let's create functionality where a user can press a button and then get a new spirit animal.