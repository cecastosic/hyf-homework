//Smart-ease - Goes Global!

function getFullname(firstname, surname, useFormalName) {
  if(!firstname || !surname)  {
      return "Missing name";
  }
  else if (useFormalName) {
      return `Lord ${firstname} ${surname}`;
  }
  else {
      return `${firstname} ${surname}`;
  }
}


const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Sara", "Jones");

console.log(`${fullname1} and ${fullname2}`);



//Event application

const dateFull = new Date();
const dayToday = dateFull.getDay();

function getEventWeekday(days) {
    const event = (dayToday+days)%7;
    switch (event) {
      case 0:
        eventDay = "Sunday";
        break;
      case 1:
        eventDay = "Monday";
        break;
      case 2:
        eventDay = "Tuesday";
        break;
      case 3:
        eventDay = "Wednesday";
        break;
      case 4:
        eventDay = "Thursday";
        break;
      case 5:
        eventDay = "Friday";
        break;
      case 6:
        eventDay = "Saturday";
        break;
}
    return eventDay;
}

console.log(`Event will be held on ${getEventWeekday(15)}`);


//Weather wear

function whatToWear(temperature) {
  if (temperature<0) {
    return "Don't go outside!!! You are not a pinguin!";
  }
  else if (temperature<=10) {
    return "Don't forget a jacket and a scarf";
  }
  else if (temperature<=17) {
    return "Long sleeves still";
  }
  else if (temperature<=30) {
    return "Shorts and a t-shirt";
  }
  else if (temperature<=36) {
    return "Go to a beach and take a swimming shorts";
  }
  else {
    return "Only underwear but put SPF";
  }

}
const clothesToWear = whatToWear(41);
console.log(clothesToWear);


//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  if(class07Students.includes(studentName)) {
    return `Student ${studentName} is already in the class`;
  }
  else if(studentName==="Queen") {
    class07Students.push(studentName);
  }
  else if(class07Students.length<=5 && studentName) { 
    class07Students.push(studentName);
  }
  else {
    return "Cannot add more students to class 07";
  }
}

function getNumberOfStudents() {
    return class07Students.length;
}

//addStudentToClass("Nina");
//addStudentToClass("Nina");
//console.log(addStudentToClass());
//console.log(getNumberOfStudents());


//Candy helper 

const boughtCandyPrices = [];
function addCandy(candyType,weight) {
  switch (candyType) {
    case "sweet":
      price = weight*0.5;
      break;
    case "chocolate":
      price = weight*0.7;
      break;
    case "toffee":
      price = weight*1.1;
      break;
    case "chewing-gum":
      price = weight*0.03;
      break;
  }
  boughtCandyPrices.push(price);
}

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  let sum = 0;

  for (let i=0; i<boughtCandyPrices.length; i++) {
    sum+=boughtCandyPrices[i];
  }
  return sum<amountToSpend;
}
addCandy('sweet', 20);

if(canBuyMoreCandy()) {
  console.log("You can buy more, so please do!"); 
}
else {
  console.log("Enough candy for you!");
}

console.log(amountToSpend,boughtCandyPrices);