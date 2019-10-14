// Create an array with 3 items. All items should be functions. 
// Iterate through the array and call all the functions.

const arr = [
    function () { console.log(`this is function: 1 of ${arr.length}`)},
    function () { 
        const x = 2;
        const y = 3;
        console.log( x + y );
    },
    function () { console.log('hello world!')}
];

arr.forEach(a => a());

// Create a function as a const and try creating a function normally. Call both functions.

function normalFunction () {
    console.log('this is a normal function');
  }
  
const functionAsConst = function () {
    console.log('this is a function as a const')
  }
  
normalFunction();
functionAsConst();


// Create an object that has a key whose value is a function. Try calling this function.

const obj = {
    func1 : function () { console.log(`this is function inside object: 1 of ${Object.keys(obj).length}`)},
    func2 : function () { 
        const x = 2;
        const y = 3;
        console.log( x * y );
    },
    func3: function () { console.log('hello world from object!')}
};


Object.keys(obj).forEach(key => obj[key]());