let buildArray = (nums) => {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]]
    }
    return result;
};

console.log(buildArray([0,2,1,5,3,4]))