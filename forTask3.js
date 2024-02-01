// task 3
// Display sum of all the odd numbers from 91 to 129. 

let sum = 0;
for (i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        const currentNumber = i;
        sum += currentNumber;
    }
}
// console.log(sum);

// Display sum of all the even numbers from 51 to 85.

let sum2 = 0;
for (i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        // console.log(i)
        const currentNumber2 = i;
        sum2 += currentNumber2;
    }
}
console.log(sum2);
// subtask 2 is complete
