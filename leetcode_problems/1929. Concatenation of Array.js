let getConcatenation = function (nums) {
    let index = 0;
    let maxLength = nums.length * 2
    while (nums.length < maxLength) {
        nums.push(nums[index])
        index++;
    }
    return nums
};

console.log(getConcatenation([1, 2, 3]))