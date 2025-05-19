// Этот паттерн выделяет "контроллер" — класс,
// который управляет основными действиями и обработкой событий.

class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }

    login(username, password) {
        if (this.accountService.authenticate(username, password)) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    }
}

class AccountService {
    authenticate(username, password) {
        return username === 'user' && password === 'pass'; // простой пример
    }
}

const controller = new AccountController(new AccountService());
controller.login('user', 'pass'); // Выведет "Login successful"