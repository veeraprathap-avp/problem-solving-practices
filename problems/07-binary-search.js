function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        // Target found, return the index
        if (arr[mid] === target) return mid;
        // Target is larger, shift the start of our window forward
        if (arr[mid] < target) start = mid + 1; 
        // Target is smaller, shift the end of our window backward
        else end = mid - 1;
    }
    return -1;
}

const { runProblem, assert } = require('../utils');
runProblem('Binary Search', (assert) => {
    assert('target exists', binarySearch([1,2,3,4,5], 3), 2);
    assert('target does not exist', binarySearch([1,2,3,4,5], 6), -1);
    assert('empty array', binarySearch([], 1), -1);
    assert('single element found', binarySearch([1], 1), 0);
    assert('single element not found', binarySearch([1], 2), -1);
});