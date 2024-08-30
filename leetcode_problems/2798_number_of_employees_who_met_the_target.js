const numberOfEmployeesWhoMetTarget = (hours, target) => {
    return hours.filter(i => i >= target).length
}

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2)) // 3