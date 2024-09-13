const similarPairs = (words) => {
    let count = 0

    for (let i = 0; i < words.length; i++) {
        let set1 = new Set(words[i])

        for (let j = i + 1; j < words.length; j++) {
            let set2 = new Set(words[j])

            if (set1.size === set2.size && [...set1].every(char => set2.has(char))) {
                count++
            }
        }
    }

    return count
}

console.log(similarPairs(['aba','aabb','abcd','bac','aabc'])) // 2