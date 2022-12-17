/**
 * recursive soluiton to generating fibo sequence
 * @param {number} n: number of elements
 * @returns fibo sequence of length n
 */
var cache = []

const fibsRecurse = (n) => {
    if (cache[n]) {
        return cache[n];
    }
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    let prev = fibsRecurse(n-1)
    cache[n] = [...prev, prev[n-2] + prev[n-3]];
    return cache[n];
}

console.log(fibsRecurse(-1));
console.log(fibsRecurse(3));
console.log(fibsRecurse(7));