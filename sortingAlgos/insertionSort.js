//Start by picking the second element in the array
//Now compare the second element with the one before it and swap if necessary
//Continue to the next element and if it is in the incorrect order, iterate through 
//the sorted portion to place the element in the correct place

//My implementation. Not perfect
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      for (let j = i; j > 0; j--) {
        if (arr[j-1] > arr[j]) {
          [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([5,2,8,9,4,1]))

function insertionSort2(arr){
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr
}