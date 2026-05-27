function sort(input) {
    let arr = [...input];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr.join('');
}

const { runProblem, assert } = require('../utils'); 
runProblem('Sort Characters', (assert) => {
    assert('basic case', sort("hello"), "ehllo");
    assert('with spaces', sort("a b c"), " abc");
    assert('with duplicates', sort("banana"), "aaabnn");
    assert('67765675352', sort("67765675352"), "23555666777"); 
});