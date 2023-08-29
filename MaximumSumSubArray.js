// given an integer array nums, find the subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1: brute force

function maxSubarray1(nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

console.log(maxSubarray1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// Example 2: Kadane's Algorithm

function maxSubarray2(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
