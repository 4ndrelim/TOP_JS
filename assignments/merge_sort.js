/**
 * Sorts the array in place
 * @param {array} arr Array in question
 */
const mergeSort = (arr) => {
    if (arr.length <=1) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArr, rightArr) => {
    const res = [];
    let l = 0;
    let r = 0;
    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] <= rightArr[r]) {
            res.push(leftArr[l++]);
        } else {
            res.push(rightArr[r++]);
        }
    }
    while (l < leftArr.length) {
        res.push(leftArr[l++]);
    }
    while (r < rightArr.length) {
        res.push(rightArr[r++]);
    }

    return res;
}

console.log(mergeSort([10,8,3,9,4,7,2]));