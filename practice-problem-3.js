// TASK : Write an arrow function where it will do the following: X^2
/*
    1. Square each array element.
    2. Calculate the sum of the squared elements.
    3. Return the average of the sum of the squared elements.
*/ 

const crazyMath = (numbers) => {
    let sum = 0;
    for( const number of numbers){
        const squared = number * number;
        sum = sum + squared;
    }
    return sum;
};
const numbers = [24, 42, 73, 48, 29, 25, 40, 83, 15, 31, 40];
console.log(crazyMath(numbers));