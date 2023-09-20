// Генератор случайного цвета
function getRandomColor() {
    // Генерируем три случайных числа от 0 до 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Преобразуем числа в шестнадцатеричный формат и объединяем их в строку
    let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

    // Если длина строки меньше 7 символов, добавляем нули в начало
    while (color.length < 7) {
        color = color + "0";
    }

    return color;
}

console.log(getRandomColor()); // #a1b2c3
