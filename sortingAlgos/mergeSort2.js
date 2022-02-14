//MERGE SORT

//Break up the array into halves until you have arrays that are empty or have
//  one element
//Once you have smaller sorted arrays, merge those arrays with other sorted arrays
//  until you are back at the full length of the array

function largestCountValue(arr){
  let counter = 0;

  var mergeSort = function(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
   
    function mergeArray(arr1, arr2){
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
              counter++;
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
    return mergeArray(left, right);
  }
  mergeSort(arr);
  return counter;
}
console.log(largestCountValue([1, 2, 3, 4, 5]))