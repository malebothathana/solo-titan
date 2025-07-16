 
// admin.test.js

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

const {
  getAllRequests,
  updateRequestStatus,
  calculateStats
} = require('./admin');

describe('Admin Module', () => {
  const mockRequests = [
    { id: 'REQ001', status: 'Pending' },
    { id: 'REQ002', status: 'Scheduled' },
    { id: 'REQ003', status: 'Completed' },
    { id: 'REQ004', status: 'Missed' },
    { id: 'REQ005', status: 'Pending' }
  ];

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify(mockRequests));
  });

  test(' getAllRequests returns all requests from localStorage', () => {
    const result = getAllRequests();
    expect(result.length).toBe(5);
    expect(result[0].id).toBe('REQ001');
  });

  test(' updateRequestStatus updates the correct request and returns true', () => {
    const success = updateRequestStatus('REQ002', 'Completed');
    expect(success).toBe(true);

    const updated = getAllRequests().find(r => r.id === 'REQ002');
    expect(updated.status).toBe('Completed');
  });

  test(' updateRequestStatus returns false if request ID not found', () => {
    const result = updateRequestStatus('INVALID_ID', 'Pending');
    expect(result).toBe(false);
  });

  test(' calculateStats returns accurate counts for each status', () => {
    const stats = calculateStats();
    expect(stats.total).toBe(5);
    expect(stats.pending).toBe(2);
    expect(stats.scheduled).toBe(1);
    expect(stats.completed).toBe(1);
    expect(stats.missed).toBe(1);
  });

  test(' calculateStats returns zeroes for empty data', () => {
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify([]));
    const stats = calculateStats();
    expect(stats).toEqual({
      total: 0,
      pending: 0,
      scheduled: 0,
      completed: 0,
      missed: 0
    });
  });
});
