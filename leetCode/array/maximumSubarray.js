//O(n2) solution that I came up with
function maximumSubarray(arr) {
  let highestValue = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum > highestValue) {
        highestValue = sum;
      }
    }
  }
  return highestValue
}

console.log(maximumSubarray([4,-1,2,1,-5,4]))

function maxSubArray2(arr) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < arr.length; i++) {
    prev = Math.max(prev + arr[i], arr[i]);
    max = Math.max(max, prev);
  }
  return max;
}

