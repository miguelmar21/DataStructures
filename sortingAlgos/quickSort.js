//Like merge sort, quick sort likes arrays of 0 or 1 elements
//Works by selecting one element called the "pivot" and finding the index where the
//  pivot should end up in the sorted array 

//Pivot helper
/**
 * It will help to accept three arguements: an array, a start index, and an end index
 * Grab the pivot from the start of the array
 * Store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * Loop through the array from the start until the end
 * If the pivot is greater than the current element, increment the pivot index variable
 * and then swap the current element with the element at the pivot index
 * Swap the starting element with the pivot index
 * Return the pivot index
 */

function pivot(arr, start=0, end=arr.length+1) {
  var pivot = arr[start];
  var swapIndex = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
  return swapIndex;
}

// console.log(pivot([4,8,2,1,5,7,6,3]))
//[1,2,3,4,5,6,7,8]
//So the function should return 3 because 4 (first element) should be in the 3rd index

function quickSort(arr, left = 0, right = arr.length - 1){
  if (left < right) {
    var pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}

console.log(quickSort([4,3,2,6,7,1]))