/*
  Дана строка allowed и массив строк words.
  Ваша задача — найти количество строк в массиве words,
  которые содержат только уникальные символы,
  и при этом все символы присутствуют в строке allowed.
*/

const uniqueCharacterStrings = (allowed, words) => {
    let allowedSet = new Set(allowed)
    let count = 0

    for (let word of words) {
        let isAllSymbolsUnique = new Set(word).size === word.length
        let isAllSymbolsConsistent = true

        for (let char of word) {
            if (!allowedSet.has(char)) {
                isAllSymbolsConsistent = false
                break
            }
        }

        if (isAllSymbolsUnique && isAllSymbolsConsistent) count++
    }

    return count
}

console.log(uniqueCharacterStrings('abcde', ['ab', 'bcd', 'ace', 'aa', 'abcde', 'f'])) // 4