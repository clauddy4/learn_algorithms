const cancellable = function(fn, args, t) {
    let timeout = setTimeout(() => {
        fn(...args)
    }, t)

    return function cancelFn() {
        clearTimeout(timeout)
    }
}

console.log(cancellable((x) => x * 5, [2], 20))