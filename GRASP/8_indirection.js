// Посредничество
// Этот паттерн используется для уменьшения прямой зависимости между классами.

class EmailService {
    sendEmail(recipient, message) {
        console.log(`Email sent to ${recipient}: ${message}`);
    }
}

class NotificationService {
    constructor(emailService) {
        this.emailService = emailService;
    }

    sendNotification(user, message) {
        this.emailService.sendEmail(user.email, message);
    }
}

const emailService = new EmailService();
const notificationService = new NotificationService(emailService);
notificationService.sendNotification({ email: 'user@example.com' }, 'Hello!');
// Выведет "Email sent to user@example.com: Hello!"