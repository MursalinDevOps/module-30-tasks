// TASK : Write an arrow function where it will do the following:
/*
    1. It will take two array inputs.
    2. Combine the two arrays and assign them in a new array.
    3. Find the maximum number from the new array and return the result.  
*/ 

const findMax2Arr = (arr1,arr2) => {
    const newArr = [...arr1 , ...arr2];
    const max = Math.max(...newArr);
    return max;
};
const arr1 = [24, 42, 73, 48, 29];
const arr2 = [25, 40, 83, 15, 31];
console.log(findMax2Arr(arr1, arr2));