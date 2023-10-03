let canBeIncreasing = function (nums) {
    let result = true;
    let removed = false;

    for (let i = 0; i <= nums.length; i++) {
        if (removed) result = false;

        if (nums[i - 2] >= nums[i]) {
            nums[i] = nums[i - 1];
            removed = true;
        }
    }

    return result;
};

console.log('final: ', canBeIncreasing([1, 2, 5, 7, 3]))