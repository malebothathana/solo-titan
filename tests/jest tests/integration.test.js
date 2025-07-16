// integration.test.js

// Mock localStorage for Jest
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
const { createMockPickup, updateRequestToCompleted, simulateAddUser } = require('./integration');

describe('Integration: Pickup Request + Admin Update', () => {
  beforeEach(() => {
    dataService.clearAllData();
  });

  test('user submits pickup request, admin updates status, system reflects the change', () => {
    const request = createMockPickup(dataService, 'Amogelang');
    expect(request).toBeDefined();
    expect(request.status).toBe('Pending');

    const updated = updateRequestToCompleted(dataService, request.id);
    expect(updated).toBe(true);

    const found = dataService.getAllPickupRequests().find(r => r.id === request.id);
    expect(found.status).toBe('Completed');
  });
});

describe('Integration: Add User Flow', () => {
  beforeEach(() => {
    dataService.clearAllData();
  });

  test('simulateAddUser adds a user and system stores it', () => {
    const success = simulateAddUser(dataService, 'newuser@test.com');
    expect(success).toBe(true);

    const user = dataService.getAllUsers().find(u => u.email === 'newuser@test.com');
    expect(user).toBeDefined();
    expect(user.name).toBe('Mock User');
  });
});
