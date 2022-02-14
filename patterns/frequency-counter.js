// FREQUENCY COUNTER PATTERN

// This pattern uses objects or sets to collection values/frequencies of values
// This can often avoid the need for nested loops

//Write a function called same which accepts two arrays
//Should return true if every value in the array has its corresponding value squared in 
//the second array. The frequency of values must be the same
// - same([1, 2, 3], [1, 4, 9]) --- true
// - same([1, 2, 3], [1, 9]) -- false


function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

same([1,2,3,2,5], [9,1,4,4,11])
//O(n)!!
//two loops is vastly better than a nested loop!

//validAnagram 
function validAnagram(str1, str2){
  // If both strings empty, return true
  // If both strings are the exact same, return false
  // Create an object for each string that keeps track of how many times each letter shows up
  // Loop through the first object. If the second object has the same key value pairs, then you're good
  // If they do not have the same key value pairs, return false
  if (str1 === str2) {
      if (str1.length === 0) {
          return true
      } else {
        return false
      }
  }
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  
  for (const letter of str1) {
      if (!frequencyCounter1[letter]) {
          frequencyCounter1[letter] = 1 
      } else {
          frequencyCounter1[letter]++
      }

  }

  for (const letter of str2) {
    if (!frequencyCounter2[letter]) {
        frequencyCounter2[letter] = 1
    } else {
        frequencyCounter2[letter]++
    }
}
  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true;
}

console.log(validAnagram('car', 'rah'));

// If you need to compare two different arrays or strings, this is a good pattern to use

