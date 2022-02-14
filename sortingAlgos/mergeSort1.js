//Combination of two things: merging and sorting
//works by decomposing an array into smaller arrays of 0 or 1 elements, then building up
// a newly sorted array

//In order to implement merge sort, its useful to first implement a function
//responsible for merging two sorted arrays
//Given two arrays which are sorted, this helper function should create a new array
//which is also sorted, and consists of all the elements in the two input arrays
//O(n+m) time and O(n+m) space and should not modify the parameters inside it

//MERGING ARRAYS
//Create an empty array, take a look at the smallest values in each input array
//While there are still values we haven't looked at..
  //If the value in the first array is smaller than the value in the second array,
  //  push the value in the first array into our results and move on to the next value
  //  in the first array
  //If the value in the first array is larger than the value in the second, push the 
  //  value in the second array into our results and move on to the next value in the second array
  //One we exhuast one array, push in all remainaing values.

//My implementation
let mergeArray = function(arr1, arr2) {
  let results = [];
  let left = 0;
  let right = 0;
  let end = false;
  while (end === false) {
    if (left > arr1.length - 1) {
      results.push(arr2.slice(right))
      end = true;
    }

    if (right > arr2.length - 1) {
      results.push(arr1.slice(left));
      end = true;
    }

    if (arr1[left] < arr2[right] || arr1[left] === arr2[right]) {
      results.push(arr1[left]);
      left++
    } else if (arr1[left] > arr2[right]) {
      results.push(arr2[right]);
      right++
    } 
  }
  return results
}

console.log(mergeArray([2,3,7], [1,2,8,9]))

function mergeArray2(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}