//When will we be there??
//Write a function where you speficy your speed in km/h and how far you have to go in km. 
//The function has to return the time it will take to arrive at your destination. 
//The time should be formatted like this: 3 hours and 34 minutes.

//Hint: For formatting your best friend is Google!

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(info) {
    const hours = parseInt( info.destinationDistance / info.speed );
    const minutes = Math.round(( info.destinationDistance % info.speed ) / info.speed * 60);
    
    return `You will arrive in ${hours} hours and ${minutes} minutes to your destination`;
}

const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
