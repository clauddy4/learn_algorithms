// Этот паттерн позволяет создать отдельный класс
// для выполнения задач, которые не относятся к моделированию реального мира.

class Logger {
    static log(message) {
        console.log(`[LOG]: ${message}`);
    }
}

Logger.log("This is a log message."); // Выведет "[LOG]: This is a log message."