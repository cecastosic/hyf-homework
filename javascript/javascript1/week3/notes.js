// Create a simple and easy to use notepad

// Save a note

const notes = [];

function addNote(content, id) {
    if (typeof (content) === 'string' && typeof (id) === 'number' && content && id) {
        notes.push({content,id});
    }
    //return notes;
}

//console.log(addNote('my first note', 1));
addNote('my first note', 1);
//console.log(addNote('my second note', 2));
addNote('my second note', 2);
//console.log(addNote('my third very long note', 3));
addNote('my third very long note', 3);
addNote('', 3);
addNote('', '');
addNote('test note', true);



//Get a note

function getNoteFromId(id) {
    if (typeof (id) === 'number') {
        for (let i = 0; i < notes.length; i++) {
            const existingIdNote = notes[i].id;
            if (existingIdNote === id) {
                return notes[i].content;;
            }
        }
    } else {
        return 'Enter a number for id';
    }
}

//getNoteFromId(2);
console.log(getNoteFromId(2));
console.log(getNoteFromId());
console.log(getNoteFromId('2'));


//Get all notes - content

function getAllNotes() {
    const notesContent = [];
    for (let i = 0; i < notes.length; i++) {
        notesContent.push(notes[i].content);
    }
    return notesContent;
}

console.log(getAllNotes());

//Log out notes

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`);
    }
}

console.log(logOutNotesFormatted());


//Unique feature
//id should be generated automatically

function addNoteDone(content) {
    if (typeof (content) === 'string' && content) {
            notes.push({
                content: content,
                id: notes.length + 1,
        });
    }
}

addNoteDone('my first note without entering ID');
addNoteDone('my second note without entering ID');
addNoteDone('');
addNoteDone(3);

console.table(notes);
