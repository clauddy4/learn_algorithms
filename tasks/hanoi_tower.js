const hanoi = (height, from, to) => {
    if (height === 1) {
        console.log('с %d на %d', from, to);
        return;
    }

    const sticksSum = 6
    const temporary = sticksSum - from - to;
    hanoi(height - 1, from, temporary);
    console.log('с %d на %d', from, to);
    hanoi(height - 1, temporary, to);
}

hanoi(4, 1, 2);
