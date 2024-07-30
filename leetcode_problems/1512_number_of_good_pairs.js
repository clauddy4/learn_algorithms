// easy
const numIdenticalPairs = (nums) => {
    let count = 0;
    let map = {};

    for (let num of nums) {
        if (map[num]) {
            count += map[num];
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    return count;
}
console.log(numIdenticalPairs([4,5,6,4,4,6])) // 4
console.log(numIdenticalPairs([1,1,1,1])) // 6