let name = '';
const date = new Date();
let favoriteDish = '';
let timer = '';
const todos = [];
const events = [];
let idx = 0;


// Object with all sentences
const sentences = [{
        question: 'hello my name is ',
        answer: ''
    },
    {
        question: 'what is my name?',
        answer: ''
    },
    {
        question: 'add ... to my todo',
        answer: ' added to your todo'
    },
    {
        question: 'remove ... from my todo',
        answer: 'Removed ... from your todo'
    },
    {
        question: 'what is on my todo?',
        answer: 'You have ' + todos.length + ' todos - '
    },
    {
        question: 'what day is it today?',
        answer: 'Today is ' + date.toDateString()
    },
    {
        question: 'what is ', //math calculation
        answer: ''
    },
    {
        question: 'what is my favorite dish?',
        answer: 'Your favorite dish is ' + favoriteDish
    },
    {
        question: 'set a timer for ',
        answer: ''
    },
    {
        question: 'add to my calendar',
        answer: ' added to your calendar'
    },
    {
        question: 'what am i doing this week?',
        answer: 'This week you have ...'
    }
];


function getReply(command) {

    idx = findIndex(command);

    if (command.includes('hello my name is ')) {
        return saveName(command);
    } else if (command.includes('what is my name')) {
        return useName(command);
    } else if (command.includes('to my todo')) {
        return addTodo(command);
    } else if (command.includes('remove')) {
        return removeTodo(command);
    } else if (command.includes('what is on my todo?')) {
        return whatTodos(command);
    } else if (command.includes('what is ') && (command.includes('+') || command.includes('-') || command.includes('*') || command.includes('/') || command.includes('%'))) {
        return doMath(command);
    } else if (command.includes('my favorite dish is')) {
        return myFavoriteDish(command);
    } else if (command.includes('what is my favorite dish')) {
        return whatFavoriteDish(command);
    } else if (command.includes('set a timer for ')) {
        return setTimer(command);
    } else if (command.includes('to my calendar')) {
        return addEvent(command);
    } else if (command.includes('what am i doing this week')) {
        return whatDoing(command);
    } else {
        return sentences[idx].answer;
    }
}

function findIndex(command) {
    for (let i = 0; i < sentences.length; i++) {
        if (command.search(sentences[i].question) >= 0) {
            //idx = i;
            return i;
        }
    }
}

// Should save the name. and respond with "nice to meet you name" 
// What if someone writes this twice?

function saveName(command) {
    if (name) {
        return 'You have already entered your name';
    } else {
        name = command.slice(17, command.length);
        return sentences[idx].answer = 'Nice to meet you ' + name;
    }
}

// Should respond with the name of the person. 
// What if the name has not yes been mentioned?

function useName(command) {
    if (name) {
        return sentences[idx].answer = 'Your name is ' + name;
    } else {
        return 'You should enter your name first';
    }
}

//Should respond with "fishing added to your todo". Should add fishing to a list of todos
//Should add shinging in the shower to a list of todos

//Remove fishing from my todo - Should respond with "Removed fishing form your todo"
//What is on my todo? - should repond with the todos. Fx you have 2 todos - fishing and singing in the shower

function addTodo(command) {
    const todo = command.slice(4, command.length - 11);
    todos.push(todo);
    idx = 2;
    return sentences[idx].answer = todo.charAt(0).toUpperCase() + todo.slice(1) + ' is added to your todo';
}

function removeTodo(command) {
    const todo = command.slice(7, command.length - 13);
    todos.splice(todos.indexOf(todo), 1);
    idx = 3;
    return sentences[idx].answer = 'Removed ' + todo + ' from your todo';

}

function whatTodos(command) {

    if (todos.length !== 0) {
        return sentences[idx].answer = 'You have ' + todos.length + ' todos - ' + todos.join(', ');
    } else {
        return sentences[idx].answer = 'Your todo list is empty.';
    }
}

// Should be able to do simple math

function doMath(command) {
    const expression = command.slice(8, command.lenght);
    const math = eval(expression);
    idx = 6;
    return sentences[6].answer = `${expression} = ${math}`;

}

// Should save the users favorite dish 

function myFavoriteDish(command) {
    favoriteDish = command.slice(20, command.lenght);
    return favoriteDish;
}

function whatFavoriteDish(command) {
    if (!favoriteDish) {
        return 'Enter your favorite dish first';
    }
    return `Your favorite dish is ${favoriteDish}`;
}

// Should respond with "Timer set for 4 minutes". 
// When 4 minutes is up: "Timer done". 

function setTimer(command) {
    timer = command.slice(16, 18);
    setTimeout(function () {
        console.log('Timer done');
    }, timer * 60 * 1000); //terminal
    //setTimeout(alert('Timer done'), timer * 60 * 1000); //window
    return 'Timer set for ' + timer + ' minutes';
}

// Should add an event represented by an object with keys name and date to an array of events.

function addEvent(command) {
    const name = command.slice(4, command.indexOf('the') - 1);
    const date = new Date(Date.parse(command.slice(command.indexOf('the') + 3, command.indexOf('to') - 1)));
    events.push({
        name,
        date
    });
    return events[events.length - 1].name + ' added to your calendar';
}

//should respond with the events for that week

function whatDoing(command) {
    if (events.length !== 0) {
        const startWeek = date.getDate() - date.getDay() + 1;
        const endWeek = startWeek + 6;
        const eventWeek = [];
        for (let i = 0; i < events.length; i++) {
            if (events[i].date.getDate() >= startWeek && events[i].date.getDate() <= endWeek) {
                eventWeek.push(events[i]);
            }
        }
        sentences[idx].answer = `This week you have ${eventWeek.length} event/s:`;

        if (eventWeek.length !== 0) {
            for (let i = 0; i < eventWeek.length; i++) {
                sentences[idx].answer += `${eventWeek[i].name} on ${eventWeek[i].date.toDateString()}`;
            }
        }
        return sentences[idx].answer;
    } else {
        return 'Your calendar is empty';
    }
}


console.log(getReply('hello my name is Ceca')); // Nice to meet you ...
console.log(getReply('what is my name?')); // Your name is ...
console.log(getReply('hello my name is John')); // You have already entered your name
console.log(getReply('add fishing to my todo')); // Fishing added to your todo
console.log(getReply('add singing in the shower to my todo')); // Singing in the shower added to your todo
console.log(getReply('add meditating to my todo'));
console.log(getReply('remove fishing from my todo')); // Should respond with "Removed finshing form your todo"
console.log(getReply('what is on my todo? ')); //should repond with the todos
console.log(getReply('what day is it today?'));
console.log(getReply('what is 3 + 3'));
console.log(getReply('my favorite dish is spaghetti'));
console.log(getReply('what is my favorite dish?'));
//console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('add Bike ride the 3/5-2019 to my calendar')); // Bike ride added to your calendar
console.log(getReply('add Running the 9/23-2019 to my calendar'));
console.log(getReply('what am i doing this week?'));