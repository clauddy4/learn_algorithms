// easy
const finalValueAfterOperations = (operations) => {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('--')) x--
        else x++
    }
    return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++","X++","X++"]))