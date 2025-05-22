const fib = (n) => {
    if (n > 1) {
        return fib(n - 1) + fib (n - 2)
    } else if (n < 1) return 0
    else return 1
}

console.log(fib(4))