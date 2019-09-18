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
function addSongToDatabase(song) {
    if (typeof (song) === 'object' && song !== null && song.songId && song.title && song.artist) {
        songDatabase.push(song);
    }
}

// should songId be plus 1 of the latest?

addSongToDatabase({
    songId: 5,
    title: 'Enter Sandman',
    artist: 'Metallica',
});
addSongToDatabase({
    songId: 6,
    title: 'Aces High',
    artist: 'Iron Maiden',
});
addSongToDatabase("Metallica");
addSongToDatabase(null);
addSongToDatabase({});

console.log(songDatabase);


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

//Optional: Add fuzzy search, so we can search for "When enough to little?" and still get the song with id 4.
function getSongByTitleFuzzy(title) {
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title.toLowerCase();
        if (titleKey.includes(title.toLowerCase())) {
            return songDatabase[i];
        }
    }
}

console.log(getSongByTitleFuzzy('When is enough too'));
console.log(getSongByTitleFuzzy('too little'));

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

const myPlaylistRock = [];
const myPlaylistClassic = [];

function addSongToPlaylist(title, playlist) {
    const song = getSongByTitleFuzzy(title);
    if (song) {
        playlist.push(song);
    }
}

addSongToPlaylist('3 nails in wood', myPlaylistClassic);
addSongToPlaylist('high', myPlaylistRock);

console.log(myPlaylistClassic, myPlaylistRock); // [{ songId: 2, title: '3 nails in wood', artist: 'The carpenters' }]


