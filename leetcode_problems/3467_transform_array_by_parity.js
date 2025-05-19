const transformArray = function(nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res.push(0);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            res.push(1);
        }
    }

    return res;
};

console.log(transformArray([4,3,2,1]))