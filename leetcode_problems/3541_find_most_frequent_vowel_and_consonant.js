const maxFreqSum = (s) => {
    const vowels = 'aeiou'

    let vowelsCounter = {}
    let consonantCounter = {}

    for (let i = 0; i < s.length; i++) {
        let isVowel = vowels.indexOf(s[i]) !== -1
        if (isVowel) {
            vowelsCounter[s[i]] === undefined ? vowelsCounter[s[i]] = 1 : vowelsCounter[s[i]]++
        } else {
            consonantCounter[s[i]] === undefined ? consonantCounter[s[i]] = 1 : consonantCounter[s[i]]++
        }
    }

    let vowelCount = Object.values(vowelsCounter).length ? Math.max(...Object.values(vowelsCounter)) : 0
    let consonantCount = Object.values(consonantCounter).length ? Math.max(...Object.values(consonantCounter)) : 0

    return vowelCount + consonantCount
}

console.log(maxFreqSum('aeiaeia'))