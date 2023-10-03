function findSmallestIndex(array) {
    let smallestElement = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function selection_sort(array) {
    let sortedArray = [];
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallestIndex(array);
        console.log(smallestIndex)

        sortedArray.push(array.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}

console.log(selection_sort([5, 3, 6, 2, 10]));
