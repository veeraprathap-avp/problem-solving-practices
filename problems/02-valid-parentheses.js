const { runProblem, assert } = require('../utils');

// ─── YOUR SOLUTION ───────────────────────────────────
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let ch of s) {
    if ('({['.includes(ch)) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}
// ─────────────────────────────────────────────────────

runProblem('Valid Parentheses', (assert) => {
  assert('all types valid',    isValid('()[]{}'),  true);
  assert('wrong order',        isValid('(]'),       false);
  assert('nested valid',       isValid('{[]}'),     true);
  assert('empty string',       isValid(''),         true);
});
