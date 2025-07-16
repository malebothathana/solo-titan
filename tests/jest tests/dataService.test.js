 
// dataService.test.js

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: key => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();
global.localStorage = localStorageMock;

const dataService = require('./dataService');

describe('dataService module', () => {
  beforeEach(() => {
    dataService.clearAllData();
  });

  test('getAllPickupRequests returns sample data after reset', () => {
    const requests = dataService.getAllPickupRequests();
    expect(Array.isArray(requests)).toBe(true);
    expect(requests.length).toBeGreaterThan(0);
  });

  test('addPickupRequest creates a new request', () => {
    const newRequest = dataService.addPickupRequest({
      fullName: 'Test User',
      location: 'Eldoret',
      wasteType: 'Hazardous',
      preferredDate: '2025-01-01'
    });
    expect(newRequest).toHaveProperty('id');
    expect(newRequest.name).toBe('Test User');
  });

  test('updateRequestStatus updates the status of a request', () => {
    const request = dataService.addPickupRequest({
      fullName: 'Update Test',
      location: 'Kisumu',
      wasteType: 'Recyclable',
      preferredDate: '2025-03-01'
    });

    const success = dataService.updateRequestStatus(request.id, 'Completed');
    expect(success).toBe(true);

    const updated = dataService.getAllPickupRequests().find(r => r.id === request.id);
    expect(updated.status).toBe('Completed');
  });

  test('addUser adds a new user', () => {
    const success = dataService.addUser({
      id: '2',
      name: 'New User',
      email: 'new@cleancity.com',
      password: 'test123',
      role: 'user',
      createdAt: new Date().toISOString()
    });
    expect(success).toBe(true);

    const users = dataService.getAllUsers();
    expect(users.find(u => u.email === 'new@cleancity.com')).toBeDefined();
  });

  test('addUser fails if email already exists', () => {
    const duplicate = dataService.addUser({
      id: '1',
      name: 'Admin',
      email: 'admin@cleancity.com',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date().toISOString()
    });
    expect(duplicate).toBe(false);
  });

  test('clearAllData resets localStorage', () => {
    localStorage.setItem('test-key', 'test-value');
    expect(localStorage.getItem('test-key')).toBe('test-value');

    dataService.clearAllData();

    expect(localStorage.getItem('test-key')).toBeNull();
    const requests = dataService.getAllPickupRequests();
    expect(requests.length).toBeGreaterThan(0);
  });
});
