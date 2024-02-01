// task 3
// Display sum of all the odd numbers from 91 to 129. 

let sum = 0;
for (i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        const currentNumber = i;
        sum += currentNumber;
    }
}
console.log(sum);

