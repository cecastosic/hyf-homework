const btn = document.getElementById('get-spiritual');
const input = document.getElementById('input');
const p = document.getElementById('spiritual-name');

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
    takeNameOnce(input.value, 'text-written');
});

function takeName(value, wantedSelection) {
    const numbers = Math.floor(Math.random() * 10);
    const selection = document.getElementById('select-option').value;

    if (selection === wantedSelection && value) {
        const name = value;
        p.textContent = `${name} - ${spiritualNames[numbers]}`;
        return p.textContent;
    }
}

function takeNameOnce(value, wantedSelection) {
    const selection = document.getElementById('select-option').value;

    if (selection === wantedSelection && value) {
        const name = value;
        p.textContent = `${name} - ${spiritualNames[number]}`;
        return p.textContent;
    }
}


document.getElementById('select-option').addEventListener('change', function () {
    const optionValue = document.getElementById('select-option').value;
    if (optionValue === 'hover-input' || optionValue === 'text-written') {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});


//Now a user tells us that he wants a new spirit animal. No problem we say. 
//Let's create functionality where a user can press a button and then get a new spirit animal.