var search = function(nums, target) {
  let left = 0; 
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    //Check if left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        //target is in the left
        right = mid - 1
      } else {
        //target is in the right
        left = mid + 1;
      }
    }

    //Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        //target is in the right
        left = mid + 1;
      } else {
        //target is in the left;
        right = mid - 1;
      }
    }
  }
  return -1
}

([3, 4, 5, 6, 7, 1, 2], 5);
left = 0;
right = 6;

mid = 3;
if (3 <= 6) {
  if (3 <= 5 && 5 <= nums[mid]) {
    right = 3 - 1
  }
}
