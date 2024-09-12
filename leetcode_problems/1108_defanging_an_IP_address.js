// easy
const defangIPaddr = (address) => address.replaceAll('.', '[.]')

console.log(defangIPaddr('1.1.1.1'))