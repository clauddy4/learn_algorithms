const twoSum = (nums, target) =>{
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i]
        let restIndex = obj[rest]

        if (restIndex !== undefined) {
            if (restIndex !== i) {
                return [i, restIndex]
            }
        }
    }
}

console.log(twoSum([3,2,4], 6))