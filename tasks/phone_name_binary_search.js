const findNumberByName = (phoneBook, name) => {
    let low = 0
    let high = phoneBook.length - 1

    if (!phoneBook.length) {
        return 'Phonebook is empty!'
    }

    while (low <= high) {
        let middle = (low + high) / 2
        let guess = phoneBook[middle]

        if (guess.name === name) {
            return guess.number
        }

        if (guess.name > name) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }

    return 'Name not found!'
}

const phonebook = [
    { name: 'Alex Bowman', number: '48-2002' },
    { name: 'Aric Almirola', number: '10-1001' },
    { name: 'Bubba Wallace', number: '23-1111' },
];

console.log(findNumberByName (phonebook, 'Alex Bowman')) // '48-2002'
console.log(findNumberByName (phonebook, 'None')) // 'Name not found!'
console.log(findNumberByName ([], 'Alex Bowman')) // 'Phonebook is empty!'
