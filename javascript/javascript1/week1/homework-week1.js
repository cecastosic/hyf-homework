//Age-ify (A future age calculator)

const yearOfBirth = 1980;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
const result = "You will be " + age + " years old in " + yearFuture + ".";

console.log(result);


//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth)*7;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".");
}
else {
    console.log("Your dog will be " + dogYear/7 + " human years old in " + dogYearFuture + ".");

}


//Housey pricey (A house price estimator)
const volumeInMeters = [8*10*10,5*11*8];
const gardenSizeInM2 = [100,70];
const housePricePeter = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const housePriceJulia = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (housePricePeter < 2500000) {
    console.log("House is too expensive, Peter");
}
else {
    console.log("Great price for the house, Peter");
}

if (housePriceJulia < 1000000) {
    console.log("House is too expensive, Julia");
}
else {
    console.log("Great price for the house, Julia");
}


//Ez Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Corporate", "Friendly", "Fancy", "Bright", "Gigantic", "Great", "Charming", "Cooperative"];
const secondWords = ["Association", "Creation", "Society", "Hub", "Start-up", "Settlement", "Charity", "Organization", "Corporation", "Institute"];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];

const resultStartup = "The startup: " + startupName + " contains " + startupName.length + " characters.";

console.log(resultStartup);