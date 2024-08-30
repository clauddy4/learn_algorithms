const smallestEvenMultiple = (n) => {
    if (n % 2 === 0) return n
    else return n * 2
}


console.log(smallestEvenMultiple(5)) // 10
console.log(smallestEvenMultiple(6)) // 6