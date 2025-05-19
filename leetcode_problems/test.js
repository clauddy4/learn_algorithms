// TODO: 2373, 1863, 2824, 2200, 2506

const romanToInt = (s) => {
    let result = 0
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        if (values[s[i]] < values[s[i + 1]]) {
            result -= values[s[i]]
        } else {
            result += values[s[i]]
        }
    }

    return result;
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994