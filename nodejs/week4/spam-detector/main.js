// Create a class called Email and a class called SpamDetector.

// Email has two properties: subject and body.
class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body;
    }
}

// SpamDetector should have one method: isSpam(email)
// This function should return a boolean, indicating if the email is spam or not. 
class SpamDetector {
    
    isSpam(email) {
        // Has more than 60% uppercase characters
        const checkUpperCaseRatio = (email) => {
            const subjectArr = email.subject.replace(/[^\ws+]/gi, '').split('');
            const bodyArr = email.body.replace(/[^\ws+]/gi, '').split('');
            const lettersArr = subjectArr.concat(bodyArr);
            const sum = lettersArr.filter(letter => letter == letter.toUpperCase()).length;
            
            return sum > (lettersArr.length * 60 / 100);
        }
        
        // Contain words like: Viagra, Offer, Free, Business Proposal
        const checkSpamWords = (email) => {
            const spamWords = ["Viagra", "Offer", "Free", "Business Proposal"];
            const filterSpam = spamWords.filter(word => email.subject.toLowerCase().includes(word.toLowerCase()) || email.body.toLowerCase().includes(word.toLowerCase()));
            
            return filterSpam.length !== 0;
        }
        
        // Subject only contains the string "Hello"
        const checkSubjectContainsHello = (email) => {
            return email.subject === "Hello";
        }
        
        const result = [checkUpperCaseRatio(email), checkSpamWords(email), checkSubjectContainsHello(email)];
        return result.some(r => r); 
        
    }
}

const emailFromOldFriend = new Email('Hello old friend', 'Long time no see, when should we hang out again??');

const spamDetector = new SpamDetector();

console.log(spamDetector.isSpam(emailFromOldFriend)); // false