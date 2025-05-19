// Этот паттерн призывает, чтобы класс выполнял
// только связанные обязанности, избегая ненужной ответственности.

class UserProfile {
    constructor(user) {
        this.user = user;
    }

    displayUserInfo() {
        console.log(`Name: ${this.user.name}`);
        console.log(`Email: ${this.user.email}`);
    }
}

const user = { name: 'John Doe', email: 'john.doe@example.com' };
const profile = new UserProfile(user);
profile.displayUserInfo();
// Выведет:
// Name: John Doe
// Email: john.doe@example.com