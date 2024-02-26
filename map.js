// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array finally returns you the array

const numbers = [4, 5, 2, 8, 10];

/** way no: 1 */
// function doubleIt(num) {
    // console.log('run now', num);
    // return num * 2;
// }

// const result = numbers.map(doubleIt)
// console.log(result);

/** way no: 2 */
// const double2 = n => n * 2;

// const result2 = numbers.map(double2);
// console.log(result2);

/** WAY NO: 03 */
const result3 = numbers.map(n => n * 2);
console.loge(result3);

// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }