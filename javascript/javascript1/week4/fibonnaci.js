const fibonnaciSequence = [0,1]; 
function fib(number) {
    for (let i = 2; i < number; i++) {
        fibonnaciSequence[i] = fibonnaciSequence[i-1] + fibonnaciSequence[i-2];
    } 
    return fibonnaciSequence[fibonnaciSequence.length-1]
}


console.log(fib(5));
console.log(fib(10));

//console.log(fibonnaciSequence);
