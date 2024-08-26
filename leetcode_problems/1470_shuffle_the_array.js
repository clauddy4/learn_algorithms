// easy

const shuffle = (nums, n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
}

console.log(shuffle([1, 1, 2, 2], 2)) // [1, 2, 1, 2]