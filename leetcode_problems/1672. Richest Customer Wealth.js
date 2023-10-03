var maximumWealth = function (accounts) {
    let sum = 0;

    for (account of accounts) {
        let wealth = account.reduce((a, b) => a + b, 0)
        if (wealth > sum) sum = wealth
    }

    return sum
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))