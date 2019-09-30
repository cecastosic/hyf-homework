const btn = document.getElementById('get-spiritual');
const input = document.getElementById('input');
const p = document.getElementById('spiritual-name');
const selection = document.getElementById('select-option').value;

const spiritualNames = ['The fullmoon wolf', 'The fearless tiger', 'The crying butterfly', 'The forest rabit', 'The yelling monkey', 'The strong deer', 'The talking snake', 'The beautiful cow', 'The dancing bear', 'The happy duck'];
const number = Math.floor(Math.random() * 10);


if (!input.value) {
    p.textContent = `Enter your name first`;
}

    btn.addEventListener('click', function() {
        const selection = document.getElementById('select-option').value;

        if (selection === 'click-btn' && input.value) {
            const name = input.value;
            p.textContent = `${name} - ${spiritualNames[number]}`;
        } 
    });

    input.addEventListener('mouseover', function() {
        const selection = document.getElementById('select-option').value;

        if (selection === 'hover-input' && input.value) {
            const name = input.value;
            p.textContent = `${name} - ${spiritualNames[number]}`;
        } 
    });

    input.addEventListener('input', function() {
        const selection = document.getElementById('select-option').value;

        if (selection === 'text-written' && input.value) {
            const name = input.value;
            p.textContent = `${name} - ${spiritualNames[number]}`;
        } 
    });




//Now a user tells us that he wants a new spirit animal. No problem we say. 
//Let's create functionality where a user can press a button and then get a new spirit animal.