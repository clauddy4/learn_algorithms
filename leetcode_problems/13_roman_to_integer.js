var romanToInt = function(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i+1]])
            res -= roman[s[i]]
        else
            res += roman[s[i]]
    }

    return res;
};

console.log(romanToInt('MIV'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
