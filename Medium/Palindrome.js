/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 
  let n = str.length;


  for(let i = 0; i < n/2 ;i++){
      if(str[i]!= str[n-1-i]){
        return "its not a palindrome";

    }
  }

  return "its a palindrome";
}


let str = "RACACAR";

const value = isPalindrome(str);

console.log(value);
module.exports = isPalindrome;