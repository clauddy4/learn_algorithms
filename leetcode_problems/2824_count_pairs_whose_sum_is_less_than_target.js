const countPairs = (nums, target) => {
    nums.sort((a, b) => a - b)

    let count = 0
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left;
            left++
        } else {
            right--
        }
    }
    return count
}

console.log(countPairs([-1,1,2,3,1], 2  ))