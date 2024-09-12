// TODO: вернуться к 2373, 1863, 2824, 2200

const subsetXORSum = (nums) => {
    let result = 0

    const dfs = (i, currentXOR) => {
        if (i === nums.length) {
            result += currentXOR
            return
        }

        dfs(i + 1, currentXOR)
        dfs(i + 1, currentXOR ^ nums[i] )
    }
    dfs(0, 0)

    return result
}

console.log(subsetXORSum([1, 3]))
console.log(subsetXORSum([5, 1, 6]))