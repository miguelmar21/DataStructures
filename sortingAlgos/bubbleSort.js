// Not the fastest sorting algorithm, but excels in one particular area
// That is if you know that your data is basically almost sorted, this works really well

//Cool way to switch to values 
// [arr[index1], arr[index2]] = [arr[index2], arr[index1]]

//Start looping from with a variable called i the end of the array towards the beginning
//Start an inner loop with a variable called j from the beginning until i -1
//if arr[j] is greater than arr[j+1], swap those two values!
//return the sorted array

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let swapped = false; // This helps your function stop if the array is done sorting
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swapped = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      } else if (j === i - 2 && swapped === false) return arr
    }
  }
  return arr
}

console.log(bubbleSort([1, 2, 3, 4, 10, 3, 5, 8, 77, 88, 1, 4, 18, 34]));