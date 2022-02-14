function maximumProductSubarray(nums) {
  var prevMax = nums[0];
  var prevMin = nums[0];
  var result = nums[0];

  for (var i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    prevMax = curMax;
    prevMin = curMin;
    result = Math.max(curMax, result);
  }
  return result;
}

[-2, 3, -4];
prevMax = -2, prevMin = -2, result = -2;
prevMax = 3, prevMin = -6, result = 3;
prevMax = 24, prevMin = -4, result = 24; 
