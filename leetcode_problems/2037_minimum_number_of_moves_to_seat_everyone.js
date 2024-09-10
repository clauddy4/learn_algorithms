const minMovesToSeat = (seats, students) => {
    let totalMoves  = 0

    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    for (let i = 0; i < seats.length; i++) {
        totalMoves += Math.abs(seats[i] - students[i]);
    }

    return totalMoves
}

console.log(minMovesToSeat([3,20,17,2,12,15,17,4,15,20], [10,13,14,15,5,2,3,14,3,18]))