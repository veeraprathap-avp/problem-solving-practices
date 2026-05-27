const { runProblem, assert } = require('../utils');

// ─── YOUR SOLUTION ───────────────────────────────────
function maxSubArray(nums) {
  let maxSum = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSum  = Math.max(maxSum, current);
  }
  return maxSum;
}

function maxsubArrayBruteForce(nums) {
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
// ─────────────────────────────────────────────────────

runProblem('Maximum Subarray (Kadane\'s)', (assert) => {
  assert('mixed array',   maxSubArray([-2,1,-3,4,-1,2,1,-5,4]),  6);
  assert('single element',     maxSubArray([1]),    1);
  assert('all positive',       maxSubArray([5,4,-1,7,8]),   23);
  assert('all negative',       maxSubArray([-1,-2,-3]),  -1);
});
