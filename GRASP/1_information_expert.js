// Этот паттерн предполагает, что класс,
// который владеет нужной информацией, должен выполнять определенную обязанность.

class Order {
    constructor(items) {
        this.items = items; // массив с объектами товаров
    }

    // метод для вычисления общей стоимости, так как Order "владеет" информацией о товарах
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

const order = new Order([{ name: 'Book', price: 10 }, { name: 'Pen', price: 2 }]);
console.log(order.calculateTotal()); // Выведет 12