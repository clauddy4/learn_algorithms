function ArrayWrapper(nums){
    this.nums = nums;
}

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((a, b) => a + b, 0);
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.nums)
}

const obj1 = new ArrayWrapper([])
const obj2 = new ArrayWrapper([3,4])
console.log(obj1 + obj2) // 10
console.log(String(obj1)) // '[1,2]'
console.log(String(obj2)) // '[3,4]'