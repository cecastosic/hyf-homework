//Write a function that finds the longest palindromic substring of a given string

function palindromSubstring(string) {
    const stringReverse = string.split('').reverse().join('');
    const substrings = [];
    for (let i = 0; i < string.length; i++) {
    
    for (let j = stringReverse.length; j >= 0; j--) {
        const substring = string.substr(0, i);

        const substringReverse = stringReverse.substr(j, stringReverse.length);

        if (substring === substringReverse) {
            substrings.push(substring);
        }
    }
}

    
        
    
for (let i = 0; i < substrings.length; i++) {
    maxLength = 1;
    if (substrings[i].length > 1) {
        maxLength = substrings[i].length;
        return substrings[i];
    }
}

    
    return substrings;


}

console.log(palindromSubstring('ayal')); 
console.log(palindromSubstring("madamaaa")); 
console.log(palindromSubstring("anamilovanaaana")); 
console.log(palindromSubstring('abcxyzyxabcdaaa'));
