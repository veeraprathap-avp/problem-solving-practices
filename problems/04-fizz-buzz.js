const { runProblem } = require("../utils");

function FizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push({i:'FizzBuzz'});
    if (i % 3 === 0) result.push({i:'Fizz'});
    if (i % 5 === 0) result.push({i:'Buzz'});
    result.push({i:"nothing"});
    }
    return result;
}

runProblem('Fizz Buzz', (assert) => {
    assert('n=15', FizzBuzz(15), [
        {i:"nothing"}, {i:'Fizz'}, {i:"nothing"}, {i:'Buzz'}, {i:"nothing"}, {i:'Fizz'}, {i:"nothing"}, {i:'Buzz'}, {i:"nothing"}, {i:'Fizz'}, {i:"nothing"}, {i:'Buzz'}, {i:"nothing"}, {i:'Fizz'}, {i:"nothing"}
    ]);
});