//O(n) time and O(1) space
var productExceptSelf = function(nums) {
  let len = nums.length;
  let result = [];
  let multiplier = 1;
  for (let i = 0; i < len; i++) {
    result[i] = multiplier; // right array
    multiplier *= nums[i];
  }
  multiplier = 1; //resetting
  for (let i=len-1; i>=0; i--) {
    result[i] *= multiplier; // right array * left array
    multiplier *= nums[i];
  }
  return result;
}

console.log(productExceptSelf([1,2,3,4]));

//What you're doing is your multiplying the left side of the array with whatever came before it
//You do the same to the right side and then you multiply them together
//Pretty awesome stuff