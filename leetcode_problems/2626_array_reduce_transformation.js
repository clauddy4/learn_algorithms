const reduce = (nums, fn, init) => {
    let accum = init
    for (let num of nums) {
        accum = fn(accum, num)
    }
    return accum
}

const nums = [1, 2, 3, 4]
const sum = (accum, curr) => accum + curr
console.log(reduce(nums, sum, 0)) // 10

const nums2 = [1, 2, 3, 4]
const sum2 = (accum, curr) => accum + curr * curr
console.log(reduce(nums2, sum2, 100)) // 130