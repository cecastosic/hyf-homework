const positive = ['mega', 'super', 'awesome', 'happy', 'beautiful', 'love', 'like', 'extra'];
const negative = ['hate', 'boring', 'ugly', 'sad'];

function getSentimentScore(sentence) {
    const words = sentence.split(' ');
    const positiveWords = [];
    const negativeWords = [];
    let score = 0;
    for (let i = 0; i < words.length; i++) {
        if (positive.includes(words[i])) {
            positiveWords.push(words[i]);
            score += 1;
        } else if (negative.includes(words[i])) {
            negativeWords.push(words[i]);
            score -= 1;
        }
    }
    return {score,positiveWords, negativeWords};
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
const sentimentScoreObject2 = getSentimentScore('I hate doing boring stuff when I am sad');
console.log(sentimentScoreObject); 
console.log(sentimentScoreObject2); 


