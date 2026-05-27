const { runProblem, assert } = require('../utils');

// ─── YOUR SOLUTION ───────────────────────────────────
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}
// ─────────────────────────────────────────────────────

runProblem('Two Sum', (assert) => {
  assert('basic case',         twoSum([2,7,11,15], 9),  [0,1]);
  assert('middle elements',    twoSum([3,2,4], 6),       [1,2]);
  assert('duplicate values',   twoSum([3,3], 6),         [0,1]);
});
