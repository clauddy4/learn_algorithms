const maxWidthOfVerticalArea = (points) => {
    let maxGap = 0
    const xCoords = points.map(p => p[0]).sort((a, b) => a - b)
    for (let i = 1; i < xCoords.length; i++) {
        maxGap = Math.max(maxGap, xCoords[i] - xCoords[i - 1])
    }

    return maxGap
}

console.log(maxWidthOfVerticalArea([[8,7], [9,9], [7,4], [9,7]]))