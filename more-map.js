const numbers = [12, 13, 14, 17, 18, 19]

const double = numbers.map(num => num * 2)
// console.log(double);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const halves = numbers.map(num => num / 2);
// console.log(halves);.

const friends = ['tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frnd => frnd.length)
// console.log(lengths);
const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);