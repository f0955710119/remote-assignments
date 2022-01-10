/* 
  Success (be careful to the statement of for lop) 
  https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_%E9%99%B3%E8%BF%B0%E5%BC%8F
*/
module.exports = function max(numbers) {
  let max = 0;

  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  console.log(`The max number is ${max}.`);
  return max;
};

// Practice: The max number is 3.
// function max(numbers) {
//   let max = 0;

//   for (const number in numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }

//   console.log(`The max number is ${max}.`);
//   return max;
// }
