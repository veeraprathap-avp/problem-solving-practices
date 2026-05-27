

function mergeIntervals(windows) {
    if (!windows || windows.length === 0) return [];
    const sorted = windows.slice().sort((a, b) => a[0] - b[0]);
    const merged = [sorted[0].slice()];
    for (let i = 1; i < sorted.length; i++) {
        const [start, end] = sorted[i];
        const last = merged[merged.length - 1];
        if (start < last[1]) {
            last[1] = Math.max(last[1], end);
        } else {
            merged.push([start, end]);
        }
    }
    return merged;
}


function overlapStockWindows2(windows) {
    const overlaps = mergeIntervals(windows);
    const totalOverlap = overlaps.reduce((sum, [start, end]) => sum + (end - start), 0);
    return { overlaps, totalOverlap };
}

const { runProblem, assert } = require('../utils');


const { runProblem: runProblem2, assert: assert2 } = require('../utils');
runProblem2('Overlap Stock Windows with Details', (assert) => {
    assert('basic case', overlapStockWindows2([[1, 5], [2, 6], [4, 8]]), {overlaps: [[1, 8]], totalOverlap: 4});
    assert('no overlap', overlapStockWindows2([[1, 2], [3, 4], [5, 6]]), {overlaps: [[1, 2], [3, 4], [5, 6]], totalOverlap: 0});
    assert('full overlap', overlapStockWindows2([[1, 10], [2, 5], [3, 7]]), {overlaps: [[1, 10]], totalOverlap: 5});
    assert('partial overlaps', overlapStockWindows2([[1, 4], [2, 5], [6, 8]]), {overlaps: [[1, 5], [6, 8]], totalOverlap: 2});
    assert('single window', overlapStockWindows2([[1, 5]]), {overlaps: [[1, 5]], totalOverlap: 0});
    assert('empty input', overlapStockWindows2([[1, 3], [2, 6], [5, 7], [8, 10]]), {overlaps: [[1, 7], [8, 10]], totalOverlap: 2});
});