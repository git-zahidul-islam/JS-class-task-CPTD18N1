//  task 01 - Write a loop 1 to 200. Use break to exit the loop once you find 100.
/*
for (let i = 1; i <=200; i++) {
    console.log(i)
    if (i === 100) {
        break;
    }
}
// the task is complete 
*/

/*
// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let i = 0;
while (true) {
    if (i === 100) {
        break;
    }
    i++;
    console.log(i);
}
*/

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (i = 1; i <= 100; i++) {
    if (i === 4 || i === 9 || i === 16) {
        break;
    }
    console.log(i);
};