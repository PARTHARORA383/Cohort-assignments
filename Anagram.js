/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {


  let a = str1.length;
  let b = str2.length;

  //if the length of both the strings are not same they cannot be anagram 

  if (a != b) {
    return false;
  }

  //converting the given string to an array using split 

  const str1_split = str1.split("");
  const str2_split = str2.split("");


  //sorting both arrays  using sort() 
  //sort() function sorts an array alphabetically
  str1_split.sort();
  str2_split.sort();



  //comparing sorted strings 

  for (let i = 0; i < a; i++)
    if (str1_split[i] != str2_split[i])
      return false;


  return true;



}


let str1 = "silent";
let str2 = "listen";

if (isAnagram(str1, str2) === true
)
  console.log("The two strings are anagram")

else
  console.log("The two strings are not anagram")


module.exports = isAnagram;