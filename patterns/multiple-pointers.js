// MULTIPLE POINTERS 

// When you have a sorted array, you can use two pointers to do
// multiple work instead of doing a nested array and increasing time complextiy

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  // Use two pointers: j will scout for change. Once j finds a change, replace the number in front of i with the change then move i up one space
  // Once j and i are exactly the same, then stop and count how many spaces i moved + 1. This is your answer
  if (arr.length === 0) return 0
  if (arr.length === 1) return 1
   
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
          arr.splice(i + 1, 1, arr[j])
          i++
      }
  }
  return i + 1
}

console.log(countUniqueValues([1,1,1,2,3,4,4]))