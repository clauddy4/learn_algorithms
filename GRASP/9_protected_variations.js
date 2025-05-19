// Защита от вариаций
// Этот паттерн позволяет защитить классы от изменений с помощью интерфейсов или абстракций.

class Api {
    fetchData() {
        throw new Error('fetchData method must be implemented');
    }
}

class RealApi extends Api {
    fetchData() {
        return 'Data from API';
    }
}

class MockApi extends Api {
    fetchData() {
        return 'Mock data';
    }
}

function displayData(api) {
    console.log(api.fetchData());
}

const api = new RealApi();
displayData(api); // Выведет "Data from API"
const mockApi = new MockApi();
displayData(mockApi); // Выведет "Mock data"