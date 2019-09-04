//Age-ify (A future age calculator)

const yearOfBirth = 1980;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
const result = `You will be ${age} years old in ${yearFuture}.`;

console.log(result);


//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth)*7;
const shouldShowResultInDogYears = false;
const sentence = ["Your dog will be ", " dog years old in ", " human years old in ", "."];


if (shouldShowResultInDogYears) {
    console.log(`${sentence[0]}${dogYear}${sentence[1]}${dogYearFuture}${sentence[3]}`);
}
else {
    console.log(`${sentence[0]}${dogYear/7}${sentence[2]}${dogYearFuture}${sentence[3]}`);

}


//Housey pricey (A house price estimator)

const volumeInMeters = [8*10*10,5*11*8];
const gardenSizeInM2 = [100,70];
const housePrice = [volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300, volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];
const names = ["Peter", "Julia"];
const houseSentence = ["House is too expensive, ","Great price for the house, "];


if (housePrice[0] < 2500000) {
    console.log(`${houseSentence[0]}${names[0]}.`);
}
else {
    console.log(`${houseSentence[1]}${names[0]}.`);
}

if (housePrice[1] < 1000000) {
    console.log(`${houseSentence[0]}${names[1]}.`);
}
else {
    console.log(`${houseSentence[1]}${names[1]}.`);
}


//Ez Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Corporate", "Friendly", "Fancy", "Bright", "Gigantic", "Great", "Charming", "Cooperative"];
const secondWords = ["Association", "Creation", "Society", "Hub", "Start-up", "Settlement", "Charity", "Organization", "Corporation", "Institute"];

const randomNumber = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

const startupName = firstWords[randomNumber[0]] + " " + secondWords[randomNumber[1]];

const resultStartup = "The startup: " + startupName + " contains " + startupName.length + " characters.";

console.log(resultStartup);


//Math.random() returns a random number between 0 and 1, 
//Multiplying *10 will provide a random number from [0, 10)
//Math.floor() will round a number downward to its nearest integer
//How many unique startup names can your script create?  

for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
    const startupName = firstWords[i] + " " + secondWords[j];
    console.log(startupName);
    }
}

