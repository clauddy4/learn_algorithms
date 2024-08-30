let ParkingSystem = function (big, medium, small) {
    this.count = [big, medium, small]
}

ParkingSystem.prototype.addCar = function (carType) {
    return this.count[carType - 1]-- > 0
}

const parkingSystem = new ParkingSystem(1, 1, 0)
console.log(parkingSystem.addCar(1)) // true (Успешно припарковали большую машину)
console.log(parkingSystem.addCar(2)) // true (Успешно припарковали среднюю машину)
console.log(parkingSystem.addCar(3)) // false (Нет мест для маленькой машины)
console.log(parkingSystem.addCar(1)) // false (Больше нет мест для большой машины)