var numberOfSteps = function(num) {
    let steps = 0;

    while(num) {
        num = num % 2 === 0 ? num / 2 : --num
        steps++
    }

    return steps
};

console.log(numberOfSteps(123))
console.log(numberOfSteps(8))