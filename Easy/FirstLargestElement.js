/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

  let n = numbers.length ;

  let max = numbers[0];

  for(let i = 0;i<n ; i++){
  if(numbers[i] > max)
   max = numbers[i];
  }
 console.log(max);
}

let numbers =  [3 , 5 ,5 , 7 , 8 , 10];

findLargestElement(numbers);

module.exports = findLargestElement;