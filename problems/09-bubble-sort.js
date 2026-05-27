function bubbleSort(arr) {
    if(!arr || arr.length <=1) return arr;
    for(let i=0; i<arr.length; i++){
        for (let j=0;j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

const { runProblem, assert } = require('../utils');
runProblem('Bubble Sort', (assert) => {
    assert('basic case', bubbleSort([5,1,4,2,8]), [1,2,4,5,8]);
    assert('already sorted', bubbleSort([1,2,3]), [1,2,3]);
    assert('with duplicates', bubbleSort([3,1,2,3]), [1,2,3,3]);
    assert('empty array', bubbleSort([]), []);
});