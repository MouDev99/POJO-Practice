/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  let obj = {};
  array.forEach(function(element){
    let value = elementCounter(array, element);
    obj[element] = value;
  })
  return obj;
}
/* ******************************************************************** */

// This function takes in an array and a word as arguments and returns the count of that
// word in the array. (it does not work with numbers that have leading zeros, so it's useful when working with an array of strings only).

let elementCounter = function(arr, Word){
  let duplicates = arr.filter(function(word){
   return Word === word;
  })
  return duplicates.length;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
