// CactusIO-interactive (Smart phone usage app) optional

// Adding an activity
const activities = [];
let today = new Date().toLocaleDateString("da-DK"); //localization is not supported in node

function addActivity(activity, duration) {
    if (typeof (activity) === "string" && typeof (duration) === "number") {
        activities.push({
            acitivityDate: today,
            //acitivityDate: '17.09.2019', //only for testing showStatusToday function
            activityName: activity,
            activityDuration: duration
        });
    }
}
addActivity("Youtube", 120);
addActivity("Facebook", 30);
addActivity("Google", 200);

console.log(activities);

// Show my status

function showStatus() {
    let sumDuration = 0;

    if (activities.length === 0) {
        return `Add some activities before calling showStatus`;
    } else {
        for (let i = 0; i < activities.length; i++) {
            sumDuration += activities[i].activityDuration;
        }
        return `You have added ${activities.length} activities. They amount to ${sumDuration} min of usage.`;
    }
}

console.log(showStatus());


function showStatusLimit(limit) {
    let sumDuration = 0;

    for (let i = 0; i < activities.length; i++) {
        sumDuration += activities[i].activityDuration;
    }
    if (sumDuration >= limit) {
        return `You have reached your limit, no more smartphoning for you!`;
    }
}

console.log(showStatusLimit(300));


// Improve the showStatus function by only showing the number of actitivies for that specific day.

function showStatusToday() {
    let sumDuration = 0;

    if (activities.length === 0) {
        return `Add some activities before calling showStatus`;
    } else {
        const todayActivities = [];

        for (let i = 0; i < activities.length; i++) {
            if (activities[i].acitivityDate === today) {
                sumDuration += activities[i].activityDuration;
                todayActivities.push(activities[i]);
            }
        }

        // Extra feature
        // daily percentage 
        const minutesInDay = 24 * 60;
        if (todayActivities.length !== 0) {
            return `You have added ${todayActivities.length} activities today. They amount to ${sumDuration} min of usage. That is ${(( sumDuration * 100 ) / minutesInDay).toFixed(2) }% of daily time.`;
        }
    }
}
console.log(showStatusToday());


// Create a function for calculating the activity a user has spent the most time on.

function mostTimeOn() {
    if (activities.length !== 0) {
        const durations = [];
        for (let i = 0; i < activities.length; i++) {
            durations.push(activities[i].activityDuration);
        }
        const biggestDuration = Math.max.apply(null, durations);

        for (let i = 0; i < activities.length; i++) {
            if (activities[i].activityDuration === biggestDuration) {
                return `You have spent the most time on ${activities[i].activityName}.`;
            }
        }
    }
}

console.log(mostTimeOn());