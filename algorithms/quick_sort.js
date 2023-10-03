const quickSort = (elems, direction = 'asc') => {
    const len = elems.length;
    if (len === 0) {
        return [];
    }

    const index = Math.trunc(len / 2);
    const element = elems[index];

    const smallerElems = [];
    const biggerElems = [];

    for (let i = 0; i < len; i += 1) {
        if (i === index) {
            // eslint-disable-next-line no-continue
            continue;
        }
        const currentElement = elems[i];
        if (currentElement < element) {
            smallerElems.push(currentElement);
        } else {
            biggerElems.push(currentElement);
        }
    }

    const sortedSmallerElems = quickSort(smallerElems, direction);
    const sortedBiggerElems = quickSort(biggerElems, direction);

    if (direction === 'asc') {
        return [...sortedSmallerElems, element, ...sortedBiggerElems];
    }
    return [...sortedBiggerElems, element, ...sortedSmallerElems];
};

export default quickSort;
