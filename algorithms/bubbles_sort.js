const bubbleSort = (items) => {
    for (let limit = items.length - 1; limit > 0; limit -= 1) {
        for (let i = 0; i < limit; i += 1) {
            if (items[i] > items[i + 1]) {
                const temporary = items[i]
                items[i] = items[i + 1]
                items[i + 1] = temporary
            }
        }
    }
}

const items = [2, 3, 4, 6, 3, 1, 2, 4, 5, 1, 6, 7, 2]
bubbleSort(items)
console.log(items)
