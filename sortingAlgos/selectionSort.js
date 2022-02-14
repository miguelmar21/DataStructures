// Kinda like bubbleSort but instead of first placing large values into sorted position, 
// it places small values into sorted position
// [5, 3, 2, 1] compares two values, 5 and the rest of the values. 
// Because 1 is the smallest and smaller than 5, it swaps and becomes
// [1, 3, 2, 5]

// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new miniumum and continue the end of the array
// Repeat this with the next element until array is compeleted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
  }
  return arr;
}

console.log(selectionSort([5, 4, 9, 20, 1, 3, 4]))