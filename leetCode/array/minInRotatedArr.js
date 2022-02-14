var findMin = function(nums) {
  var left = 0,
      right = nums.length - 1
  
  while (left < right){
      var mid = Math.floor((left + right)/2)
      if (nums[mid] > nums[right]) left = mid + 1
      else right = mid
  }
  return nums[left]
};

[2, 3, 4, 1]
mid = 1;

if (3 > 1) left = 1 + 1
if (4 > 1) left = 2 + 1
//left = 3... which is the number we look for

[4, 5, 6, 7, 0, 1, 2];
mid = 3

mid = 3; if (7 > 2) left = 3 + 1
mid = 5; if (1 <= 2) right = 5;
mid = 4; if (0 > 2) left = 4 + 1

