const isValid = (s) => {
    let stack = []
    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

   for (let char of s) {
       if (!pairs[char]) {
            stack.push(char)
       } else {
           if (!stack.length || stack.pop() !== pairs[char]) {
               return false;
           }
       }
   }

    return !stack.length
}

console.log(isValid('(])'))
