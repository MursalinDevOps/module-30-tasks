// TASK : Write an arrow function where it will do the following:
/*
   1. It will take an array where the array elements will be the name of your friends
   2. Check if the length of each element is even, push elements with even length to a new array and return the result.
*/ 

const isEven = (friends) => {
  const even = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      even.push(friend);
    }
  }
  return even;
};
const friends = ["Tyler", "Christopher", "Sebastian", "Leonardo", "Murphy"];
console.log(isEven(friends));
