var canConstruct = function (ransomNote, magazine) {
    let res = true;
    magazine = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.includes(ransomNote[i]))
            magazine.splice(magazine.indexOf(ransomNote[i]), 1)
        else
            res = false;
    }

    return res;
};

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aab', 'aab'))