const mySqrt = (x) => {
    let left = 0
    let right = x

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let square = mid * mid

        if (square === x) return mid
        if (square < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}

console.log(mySqrt(4))
console.log(mySqrt(9))
console.log(mySqrt(36))