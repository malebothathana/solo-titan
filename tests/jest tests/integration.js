
// integration.js

// --- Shared Integration Utilities ---

function createMockPickup(dataService, name = 'Integration User') {
  return dataService.addPickupRequest({
    fullName: name,
    location: 'Mombasa',
    wasteType: 'General',
    preferredDate: '2024-12-01'
  });
}

function updateRequestToCompleted(dataService, requestId) {
  return dataService.updateRequestStatus(requestId, 'Completed');
}

function simulateAddUser(dataService, email = 'user@test.com') {
  return dataService.addUser({
    id: Date.now().toString(),
    name: 'Mock User',
    email,
    password: 'test123',
    role: 'user',
    createdAt: new Date().toISOString()
  });
}

module.exports = {
  createMockPickup,
  updateRequestToCompleted,
  simulateAddUser
};

// --- TEST CASES ---
//
// Utility module used in integration tests.
// Does not contain test() blocks directly.
