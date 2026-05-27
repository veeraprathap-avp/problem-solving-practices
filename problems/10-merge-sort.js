function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const merged = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) merged.push(left[i++]);
        else merged.push(right[j++]);
    }

    while (i < left.length) merged.push(left[i++]);
    while (j < right.length) merged.push(right[j++]);   
    return merged;
    //return [...merged, ...left.slice(i), ...right.slice(j)];
}

// Trace-enabled version for visualization
function mergeSortWithTrace(arr, depth = 0) {
    const indent = '  '.repeat(depth);
    console.log(indent + 'call mergeSort', JSON.stringify(arr));
    if (arr.length <= 1) {
        console.log(indent + 'return', JSON.stringify(arr));
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSortWithTrace(arr.slice(0, mid), depth + 1);
    const right = mergeSortWithTrace(arr.slice(mid), depth + 1);
    const merged = mergeWithTrace(left, right, depth + 1);
    console.log(indent + 'return', JSON.stringify(merged));
    return merged;
}

function mergeWithTrace(left, right, depth) {
    const indent = '  '.repeat(depth);
    console.log(indent + 'merge', JSON.stringify(left), 'and', JSON.stringify(right));
    const merged = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            console.log(indent + '  take', left[i]);
            i++;
        } else {
            merged.push(right[j]);
            console.log(indent + '  take', right[j]);
            j++;
        }
    }
    while (i < left.length) { merged.push(left[i]); console.log(indent + '  take', left[i]); i++; }
    while (j < right.length) { merged.push(right[j]); console.log(indent + '  take', right[j]); j++; }
    console.log(indent + '  =>', JSON.stringify(merged));
    return merged;
}


    const a = [8,3,5,4];
    console.log('Input:', a);
    console.log('Trace:');
    const res = mergeSortWithTrace(a);
    console.log('Sorted:', res);


