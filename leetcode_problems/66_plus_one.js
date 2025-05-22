const plusOne = (digits) => {
    let digit = Number(digits.join(''))
    return String(++digit).split('')
}

console.log(plusOne([1,2,3]))
console.log(plusOne([9]))