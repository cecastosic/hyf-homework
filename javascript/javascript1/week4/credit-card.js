function formatCreditCardNumber(number) {
    const string = number.toString();
    const array = [];
    for (let i = 0; i < string.length; i+=4) {
        array.push(string.slice(i,i+4));
    }
    return array.join(' ');
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);

