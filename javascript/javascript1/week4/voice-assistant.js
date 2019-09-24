let name = '';
const date = new Date();
let favoriteDish = '';
let timer = '';
const todos = [];
const events = [];
let idx = 0;

function getReply(command) {

    // Object with all sentences
    const sentences = [
        {
            question: 'Hello my name is ',
            answer: ''
        },
        {
            question: 'What is my name?',
            answer: '' 
        },
        {
            question: 'Add ... to my todo',
            answer: ' added to your todo'
        },
        {
            question: 'Remove ... from my todo',
            answer: 'Removed ... from your todo'
        },
        {
            question: 'What is on my todo?',
            answer: 'You have ' + todos.length + ' todos - '
        },
        {
            question: 'What day is it today?',
            answer: 'Today is ' + date.toDateString()
        },
        {
            question: 'What is ', //math calculation
            answer: ''
        },
        {
            question: 'What is my favorite dish?',
            answer: 'Your favorite dish is ' + favoriteDish
        },
        {
            question: 'Set a timer for ',
            answer: '' 
        },
        {
            question: 'Add to my calendar',
            answer: ' added to your calendar' 
        },
        {
            question: 'What am i doing this week?',
            answer: 'This week you have ...'
        }

    ];

    function findIndex() {
        for (let i = 0; i < sentences.length; i++) {
            if(command.search(sentences[i].question) >= 0) {
                idx = i;
                //console.log(idx);
            }
        }
    }

    findIndex();
    // Should save the name. and respond with "nice to meet you name" 
    // What if someone writes this twice?
    
    function saveName() {
        if (command.includes('Hello my name is ')) {
            if (name) {
                console.log('You have already entered your name');
            } else {
                name = command.slice(17,command.length);
                sentences[idx].answer = 'Nice to meet you ' + name;
            }  
        }
    }
    
    // Should respond with the name of the person. 
    // What if the name has not yes been mentioned?

    function useName() {
        if (command.includes('What is my name')) {
            if (name) {
                sentences[idx].answer = 'Your name is ' + name;
            }
            else {
                console.log('You should enter your name first');
            }
        } 
    }

    saveName();
    useName();
    
    //Should respond with "fishing added to your todo". Should add fishing to a list of todos
    //Should add shinging in the shower to a list of todos

    //Remove fishing from my todo - Should respond with "Removed fishing form your todo"
    //What is on my todo? - should repond with the todos. Fx you have 2 todos - fishing and singing in the shower
    
    function addTodo() {
        if (command.includes('to my todo')) {
            const todo = command.slice(4, command.length-11);
            todos.push(todo);
            sentences[2].answer = todo.charAt(0).toUpperCase() + todo.slice(1) + ' is added to your todo';
            idx = 2;
        }
    }

    function removeTodo() {
        if (command.includes('Remove')) {
            const todo = command.slice(7, command.length-13);
            todos.splice(todos.indexOf(todo), 1);
            sentences[3].answer = 'Removed ' + todo + ' from your todo';
            idx = 3;
        }
    }

    function whatTodos() {
        if (command.includes('What is on my todo?')) {

            if (todos.length !== 0) {
                sentences[idx].answer = 'You have ' + todos.length + ' todos - ' + todos.join(', ');
            } else {
                sentences[idx].answer = 'Your todo list is empty.';
            }
        }
    }

    addTodo();
    removeTodo();
    whatTodos();

    // Should be able to do simple math

    function doMath() {
        if (command.includes('What is ') && (command.includes('+') || command.includes('-') || command.includes('*') || command.includes('/') || command.includes('%'))) {
            const expression = command.slice(8, command.lenght);
            const math = eval(expression);
            sentences[6].answer = `${expression} = ${math}`;
            idx = 6;
        }
    }

    doMath();

    // Should save the users favorite dish 

    function myFavoriteDish() {
        if (command.includes('My favorite dish is'))  {
            favoriteDish = command.slice(20, command.lenght);
        } else if (command.includes('What is my favorite dish')) {
            if (!favoriteDish) {
                console.log('Enter your favorite dish first');
            }
        }
    }

    myFavoriteDish();
    

    // Should respond with "Timer set for 4 minutes". 
    // When 4 minutes is up: "Timer done". 
    
    function setTimer() {
        if (command.includes('Set a timer for '))  {
            timer = command.slice(16,18);
            setTimeout(function() {console.log('Timer done');}, timer * 60 * 1000); //terminal
            //setTimeout(alert('Timer done'), timer * 60 * 1000); //window
            sentences[idx].answer = 'Timer set for ' + timer + ' minutes';
        }
    }

    setTimer();


    // Should add an event represented by an object with keys name and date to an array of events.
    
    function addEvent() {
        if (command.includes('to my calendar')) {
            const name = command.slice(4, command.indexOf('the')-1);
            const date = new Date(Date.parse(command.slice(command.indexOf('the')+3, command.indexOf('to')-1)));
            events.push({name, date});
            sentences[9].answer = events[events.length-1].name + ' added to your calendar';
            idx = 9;
        }
    }

    addEvent();


    //should respond with the events for that week

    function whatDoing() {
        if (command.includes('What am i doing this week')) {
            if (events.length !== 0) {
                const startWeek = date.getDate() - date.getDay() + 1;
                const endWeek = startWeek + 6;
                const eventWeek = [];
                for (let i = 0; i < events.length; i++) {
                    if (events[i].date.getDate() >= startWeek && events[i].date.getDate() <= endWeek ) {
                        eventWeek.push(events[i]);
                    }
                }
                sentences[idx].answer = `This week you have ${eventWeek.length} event/s:`;

                if (eventWeek.length !== 0) {
                    for (let i = 0; i < eventWeek.length; i++) {
                        sentences[idx].answer += `${eventWeek[i].name} on ${eventWeek[i].date.toDateString()}`;
                    }
                }

            } else {
                console.log('Your calendar is empty');
            }
        }
    }

    whatDoing();

    return sentences[idx].answer;
}

console.log(getReply('Hello my name is Ceca')); // Nice to meet you ...
console.log(getReply('What is my name?')); // Your name is ...
console.log(getReply('Hello my name is John')); // You have already entered your name
console.log(getReply('Add fishing to my todo')); // Fishing added to your todo
console.log(getReply('Add singing in the shower to my todo')); // Singing in the shower added to your todo
console.log(getReply('Add meditating to my todo')); 
console.log(getReply('Remove fishing from my todo')); // Should respond with "Removed finshing form your todo"
console.log(getReply('What is on my todo? ')) ; //should repond with the todos
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('My favorite dish is spaghetti'));
console.log(getReply('What is my favorite dish?'));
//console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('Add Bike ride the 3/5-2019 to my calendar')); // Bike ride added to your calendar
console.log(getReply('Add Running the 9/23-2019 to my calendar')); 
console.log(getReply('What am i doing this week?'));

