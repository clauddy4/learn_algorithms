const getSneakyNumbers = (nums) => {
    let uniqueNums = []
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (uniqueNums.indexOf(nums[i]) === -1) {
            uniqueNums.push(nums[i])
        } else {
            result.push(nums[i])
        }
    }

    return result
}

console.log(getSneakyNumbers([0,3,2,1,3,2]))