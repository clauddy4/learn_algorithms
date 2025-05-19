// Этот паттерн рекомендует минимизировать зависимости между классами.
// Например, вместо жёсткой зависимости от конкретного класса использовать интерфейс
// (в JavaScript можно сделать это через функции).

class PaymentProcessor {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    processPayment(amount) {
        this.paymentService.pay(amount);
    }
}

class StripeService {
    pay(amount) {
        console.log(`Paid ${amount} with Stripe`);
    }
}

const stripe = new StripeService();
const paymentProcessor = new PaymentProcessor(stripe);
paymentProcessor.processPayment(100); // Выведет "Paid 100 with Stripe"