var isPalindrome = function(head) {
    let isPalindrome;
    let len = head.length - 1;

    for (let i = 0; i <= len; i++) {
        if (head[i] !== head[len - i]) isPalindrome = false
        else isPalindrome = true
    }

    return isPalindrome;
};

console.log(isPalindrome([1,2,2,1]))
// console.log(isPalindrome([1,2]))