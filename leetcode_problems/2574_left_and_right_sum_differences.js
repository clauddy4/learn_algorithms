const leftRightDifference = (nums) => {
    const n = nums.length;
    const leftSum = new Array(n).fill(0)
    const rightSum = new Array(n).fill(0)
    const answer = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        if (i === 0) leftSum[i] = 0
        else leftSum[i] = leftSum[i - 1] + nums[i - 1]
    }

    for (let i = n - 1; i >= 0; i--) {
        if (i === n - 1) rightSum[i] = 0
        else rightSum[i] = rightSum[i + 1] + nums[i + 1]
    }

    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i])
    }

    return answer
}

console.log(leftRightDifference([10,4,8,3]))