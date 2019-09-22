//Add song to database

const songDatabase = [{
        songId: 1,
        title: 'My baby',
        artist: 'Soggy socks',
    },
    {
        songId: 2,
        title: '3 nails in wood',
        artist: 'The carpenters',
    },
    {
        songId: 3,
        title: 'Blacker than black',
        artist: 'Instant coffee',
    },
    {
        songId: 4,
        title: 'When is enough too little?',
        artist: 'The spies girls',
    },
];

const myPlaylist = [];

//Should this function return anything? What do you think, why/why not?
//No, nothing should be returned, since this function is used just for push an item to the array.
function addSongToDatabase(title, artist) {
    if (typeof (title) === 'string' && typeof (artist) === 'string' && title && artist) {
        songDatabase.push({
            songId: songDatabase.length + 1,
            title: title,
            artist: artist
        });
    }
}

addSongToDatabase('Enter Sandman','Metallica');
addSongToDatabase('Aces High','Iron Maiden');
addSongToDatabase('High Voltage', 'AC/DC');
addSongToDatabase('Metallica');
addSongToDatabase(null, null);
addSongToDatabase("", "");

console.table(songDatabase);


//Searching for a song

function getSongByTitle(title) {
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title;
        if (titleKey === title) {
            return songDatabase[i];
        }
    }
}

const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong); // returns { songId: 4, title: 'When is enough too little', artist: 'The spies girls'}

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2); // returns undefined

//Optional: Add extra search
function getSongByTitleFuzzy(title) {
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title.toLowerCase();
        if (titleKey.includes(title.toLowerCase())) {
            return songDatabase[i];
        }
    }
}

//Optional: Add fuzzy search, so we can search for 'When enough to little?' and still get the song with id 4.
function getSongByTitleFuzzy2(title) {
    const titleSplit = (title.split(' '));
    const mySearch = [];
    for (let i = 0; i < titleSplit.length; i++) {
        for (let j = 0; j < songDatabase.length; j++) {
            const titleDatabase = songDatabase[j].title.toLowerCase();  
            const titleSearched = titleSplit[i].toLowerCase();
            if (titleDatabase.search(titleSearched) >= 0) {
                mySearch.push(songDatabase[j]);
            } 
            
        }
        return mySearch;
    }
    return `There is no such song name in the database`;
}

console.log(getSongByTitleFuzzy2('When enough to little'));
console.log(getSongByTitleFuzzy2('high'));
//console.log(getSongByTitleFuzzy2('when'));


//Create our own playlist

function addSongToMyPlaylist(title) {
    const song = getSongByTitleFuzzy(title);
    if (song) {
        myPlaylist.push(song);
    }
}

addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist('high');

console.log(myPlaylist); // [{ songId: 2, title: '3 nails in wood', artist: 'The carpenters' }]

//Improving our application optional
//What if there are multiple songs with the same name? Then we have problems in our getSongByTitle function! 
//Instead of returning a song, return an array of songs that match the title parameter.

addSongToDatabase({
    songId: 7,
    title: 'Hurt',
    artist: 'Johnny Cash',
});
addSongToDatabase({
    songId: 8,
    title: 'Hurt',
    artist: 'Nine inch nails',
});


function getAllSongsByTitle(title) {
    const allSongs = [];
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title;
        if (titleKey === title) {
            allSongs.push(songDatabase[i]);
        }
    }
    return allSongs;
}

console.log(getAllSongsByTitle('Hurt'));

//What if a user had multiple playlists? 
//How could we accomodate that? Either describe how to fix this problem or make some code!

const myPlaylists = {
    rock: [],
    classic: []
}


function addSongToPlaylist(title, category) {
    const song = getSongByTitleFuzzy(title);
    if (song) {
        myPlaylists[category].push(song);
    }
}

addSongToPlaylist('3 nails in wood', 'rock');
addSongToPlaylist('high', 'classic');

console.table(myPlaylist); // [{ songId: 2, title: '3 nails in wood', artist: 'The carpenters' }]


