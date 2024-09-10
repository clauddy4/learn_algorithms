const convertDateToBinary = (date) => {
    return date.split('-').map(i => Number(i).toString(2)).join('-');
}

console.log(convertDateToBinary('2080-02-29'))
console.log(convertDateToBinary('1900-01-01'))