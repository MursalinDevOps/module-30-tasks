// TASK-01 : Write an arrow function that will take 3 params, will multiply the params and will return the result. 

const multiply = (num1, num2, num3) => num1*num2*num3;
console.log(multiply(10,5,2)); 

// TASK-02 : Write the following sentence in THREE lines and print the result.

const text = `I am a web developer.
I love to code.
I love to listening music`;
console.log(text);

// TASK-03 : Write an arrow function that will take 2 params: One will come from you and the other will be default param. Add these two params and return the result.

const add = (number1, number2 = 0) => number1 + number2;
console.log(add(99));
