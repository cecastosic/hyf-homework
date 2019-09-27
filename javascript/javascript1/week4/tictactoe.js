function getRenderedGame(position) {
   const info = {
    winner: undefined,
    loser: undefined,
    hasEnded: false
   }

    for (let i = 0; i < 3; i++) {
        //for (let j = 0; j < 2; j++) {
            if ((position[0][i] === 'x' && position[1][i] === 'x' && position[2][i] === 'x') || (position[i][0] === 'x' && position[i][1] === 'x' && position[i][2] === 'x')) {
                info.winner = 'x';
                info.loser = 'o';
                info.hasEnded = true;

            } else if ((position[0][i] === 'o' && position[1][i] === 'o' && position[2][i] === 'o') || (position[i][0] === 'o' && position[i][1] === 'o' && position[i][2] === 'o')) {
                info.winner = 'o';
                info.loser = 'x';
                info.hasEnded = true;

            } 
        //}

    }
    if ((position[0][0] === 'o' && position[1][1] === 'o' && position[2][2] === 'o') || (position[0][2] === 'o' && position[1][1] === 'o' && position[2][0] === 'o')) {
        info.winner = 'o';
        info.loser = 'x';
        info.hasEnded = true;

    } else if ((position[0][0] === 'x' && position[1][1] === 'x' && position[2][2] === 'x') || (position[0][2] === 'x' && position[1][1] === 'x' && position[2][0] === 'x')) {
        info.winner = 'x';
        info.loser = 'o';
        info.hasEnded = true;
    } 
    return info;
}


//     00 01 02 i = 0 i = 1 i = 2
//     10 11 12 j = 0 j = 1 j = 2
//     20 21 22
//     00 10 20
//     01 11 21
//     02 12 22
// 00 11 22
// 02 11 20



const position = [
    ['x', ' ', 'o'],
    [' ', 'x', 'x'],
    [' ', ' ', 'x']
];
const renderedGame = getRenderedGame(position);
console.log(renderedGame);

/*
 *******
 *x*o* *
 * *o* *
 * *o*x*
 *******
 */