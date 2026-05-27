const assert = (description, got, expected) => {
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  if (pass) {
    console.log(` Output:: ${description} = ${JSON.stringify(got)}`);
  } else {
    console.log(` *** ${description} ***`);
    console.log(`     Got:      ${JSON.stringify(got)}`);
    console.log(`     Expected: ${JSON.stringify(expected)}`);
  }
  return pass;
};

const runProblem = (title, fn) => {
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`## ${title}`);
  console.log('─'.repeat(50));
  fn(assert);
};

module.exports = { assert, runProblem };
