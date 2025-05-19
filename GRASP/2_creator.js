// Этот паттерн назначает создание объекта тому классу,
// который знает, как и когда его создавать.

class Report {
    constructor(content) {
        this.content = content;
    }
}

class ReportCreator {
    createReport(data) {
        const content = `Report for ${data.title}`;
        return new Report(content); // создает Report, так как "знает" детали его создания
    }
}

const creator = new ReportCreator();
const report = creator.createReport({ title: 'Monthly Sales' });
console.log(report.content); // Выведет "Report for Monthly Sales"