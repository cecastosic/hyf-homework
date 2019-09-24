//Item array removal
//Remove the item in names that is equal to nameToRemove

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here

names.splice(names.indexOf(nameToRemove), 1);

//as a function 
function removeName(name) {
    names.splice(names.indexOf(name), 1);
    return names;
}
//removeName(nameToRemove);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
