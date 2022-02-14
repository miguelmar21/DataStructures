//O(n2) solution
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

console.log(twoSum([2,7,11,15], 9))

//O(n) solution
var twoSum2 = function(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // If there is a number than, when added with itself equals target, then return it
      return [map.get(target - nums[i]), i] 
      // else, set a new key pair until that number can be found
    } else {
      map.set(nums[i], i); // Will add a key pair to map. Ex: (2, 0)
    }
  }
}
