// simple solution
const interpret = (command) => {
    return command
        .replaceAll('()', 'o')
        .replaceAll('(al)', 'al');
}

console.log(interpret('G()(al)')) // Goal
console.log(interpret('G()()()()(al)')) // Gooooal

// O(n) solution
const interpret2 = (command) => {
    let curr = ''
    let result = ''
    const interpreter = {
        'G': 'G',
        '()': 'o',
        '(al)': 'al'
    }
    for (let i = 0; i < command.length; i++) {
        curr += command[i]
        if (interpreter[curr]) {
            result += interpreter[curr]
            curr = ''
        }
    }
    return result
}