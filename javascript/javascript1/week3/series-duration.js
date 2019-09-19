// Series duration of my life
// How much time of my life have i been watching series? Lets find out! 
// Calculate how much time a series have taken as a percentage of an average lifespan of 80 years.

function lifeTaken() {

    const seriesDurations = [{
            title: 'Game of thrones',
            days: 3,
            hours: 1,
            minutes: 0,
        },
        {
            title: 'True Detective',
            days: 1,
            hours: 0,
            minutes: 0,
        },
        {
            title: 'Friends',
            days: 3,
            hours: 14,
            minutes: 32,
        },
        {
            title: 'House of Cards',
            days: 2,
            hours: 12,
            minutes: 49,
        },

    ];

    const years = 80 * 365 * 24 * 60; //80 years in minutes
    let totalSum = 0;

    function calculatePercentage(sum) {
        const inPercent = (( sum * 100 ) / years );
        return inPercent;
    }

    for (let i = 0; i < seriesDurations.length; i++) {
        const sum = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes; //in minutes
        console.log(`${seriesDurations[i].title} took ${calculatePercentage(sum).toFixed(3)}% of my life`);
        totalSum += sum;
    }

    const total = calculatePercentage(totalSum).toFixed(3);
    return `In total that is ${total}% of my life`;
}


console.log(lifeTaken());