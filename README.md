# Practice problem solving — Node.js

## Run all problems
```bash
node runner.js
```

## Run a single problem
```bash
node runner.js two-sum
node runner.js parentheses
OR
npm run run:all
npm run run:file <filename> 
```

## Add a new problem
1. Copy `problems/TEMPLATE.js`
2. Rename it: `problems/04-my-problem.js`
3. Write your function between the markers
4. Add test cases using `assert(description, got, expected)`
5. Run it!

## Assert usage
```js
assert('description', yourFunction(input), expectedOutput)
```
