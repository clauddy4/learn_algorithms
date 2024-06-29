const findPermutationDifference = (s, t) => {
    let res = 0
    let tIndex = 0
    for (let i = 0; i < s.length; i++) {
        tIndex = t.indexOf(s[i])
        res += Math.abs(i - tIndex)
    }

    return res
}

console.log(findPermutationDifference('abcde', 'edbac'))