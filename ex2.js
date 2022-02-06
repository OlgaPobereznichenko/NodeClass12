const numberAsAString = '3';

console.log(typeof numberAsAString) // sritng

const number = parseInt(numberAsAString);
const newNumber = parseInt('a');

console.log(number); // 3

console.log(typeof number) // number

var total = number +5;
var strTotal = numberAsAString + 5;

console.log(`newNumber : ${newNumber}`);  // NAN
console.log(`Total : ${total}`); // 8
console.log(`strTotal : ${strTotal}`);  // '389'

//ParseFloat

const piAsText = '3.14';
const pi = parseFloat(piAsText);
console.log(pi);