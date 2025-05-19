const isPalindrome = (x) => {
    x = x.toString();

    let res = true

    let temp = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === x[x.length - 1 - i]) continue;
        else res = false
    }
    return res;
}

console.log(isPalindrome(101))