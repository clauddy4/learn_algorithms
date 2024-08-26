const largestLocal = (grid) => {
    const n = grid.length
    const res = []

    for (let i = 1; i < n - 1; i++) {
        const row = []
        for (let j = 1; j < n - 1; j++) {
            let max = 0

            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    max = Math.max(max, grid[k][l])
                }
            }

            row.push(max)
        }
        res.push(row)
    }

    return res
}

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]])) // [[9,9],[8,6]]