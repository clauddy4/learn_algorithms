const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    for (let stone of stones) {
        if (jewels.includes(stone)) count++
    }

    return count
}

console.log(numJewelsInStones('aA', 'aAAbbbb')) // 3