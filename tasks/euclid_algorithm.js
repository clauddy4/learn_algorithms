const euclidAlgorithm = (a, b) => {
    if (a === b) return a
    if (a > b) return euclidAlgorithm(a - b, b)
    return euclidAlgorithm(a, b - a)
}

console.log(euclidAlgorithm(38, 28)) // 2
console.log(euclidAlgorithm(129, 90)) // 3
