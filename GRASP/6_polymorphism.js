// Этот паттерн позволяет использовать общий интерфейс для классов,
// которые реализуют разные способы выполнения обязанности.

class Shape {
    area() {
        throw new Error("Method 'area' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => console.log(shape.area()));
// Выведет площадь для Circle и Square соответственно