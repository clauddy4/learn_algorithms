let mostWordsFound = function(sentences) {
    let maxLength = 0;
    for (sentence of sentences) {
        let length = sentence.split(' ').length
        if (length > maxLength) maxLength = length
    }

    return maxLength;
};

console.log(mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']))