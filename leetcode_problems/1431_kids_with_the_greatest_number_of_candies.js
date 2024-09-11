const kidsWithCandies = (candies, extraCandies) => {
    let max = Math.max(...candies)
    return candies.map(candy => {
        return candy + extraCandies >= max
    })
}

console.log(kidsWithCandies([2,3,5,1,3], 3)) // [true,true,true,false,true]