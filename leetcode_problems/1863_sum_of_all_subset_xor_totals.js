const subsetXORSum = (nums) => {
    let result = 0

    const dfs = (i, currentXOR) => {
        if (i === nums.length) {
            result += currentXOR
            return
        }

        dfs(i + 1, currentXOR)
        dfs(i + 1, currentXOR ^ nums[i])
    }
    dfs(0, 0)

    return result
}

console.log(subsetXORSum([1, 3])) // 6
console.log(subsetXORSum([5, 1, 6])) // 28