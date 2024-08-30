const minimumOperations = (nums) => {
    let result = 0
    for (let num of nums) {
        let remainder = num % 3
        if (remainder) result++
    }
    return result
}

console.log(minimumOperations([1,2,3,4])) // 3
console.log(minimumOperations([8])) // 1