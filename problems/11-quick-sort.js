function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];   
}


function partition(arr, low, high) {
    const pivot = arr[high];
    let moveIdx = low - 1;
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            moveIdx++;
            if (moveIdx !== i)
                [arr[i], arr[moveIdx]] = [arr[moveIdx], arr[i]];
        }
    }
    moveIdx++;
    if (moveIdx !== high)
        [arr[moveIdx], arr[high]] = [arr[high], arr[moveIdx]];
    return moveIdx;
}
    
function RandomizePartition(arr,low,high) {
  const randomIdx = Math.floor(Math.random() * (high - low) + low);
    [arr[randomIdx], arr[high]] = [arr[high], arr[randomIdx]]; //important to swap the random pivot with the last element before partitioning
    return partition(arr, low, high);
}

function randomizedQuickSort(arr, low=0, high=arr.length-1) {
    if(low<high){
        const pivotIdx = RandomizePartition(arr, low, high);
        randomizedQuickSort(arr, low, pivotIdx-1);
        randomizedQuickSort(arr, pivotIdx+1, high);
    }
    return arr;
}

function quickSortInPlace(arr, low=0, high=arr.length-1) {
    if(low<high){
        const pivotIdx = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIdx-1);
        quickSortInPlace(arr, pivotIdx+1, high);
    }
    return arr;
}