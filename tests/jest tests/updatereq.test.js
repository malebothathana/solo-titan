// tests/updatereq.test.js

const { updateRequestStatus, getAllPickupRequests } = require('../updatereq');

// Minimal manual mock for localStorage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value.toString();
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  }
};

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('cleancity_pickup_requests', JSON.stringify([
    { id: 'REQ001', name: 'John Doe', status: 'Pending' },
    { id: 'REQ002', name: 'Jane Smith', status: 'Scheduled' },
  ]));
});

describe('updateRequestStatus()', () => {
  test('updates status of an existing request', () => {
    const result = updateRequestStatus('REQ001', 'Completed');
    expect(result).toBe(true);
    const updated = getAllPickupRequests().find(r => r.id === 'REQ001');
    expect(updated.status).toBe('Completed');
  });

  test('returns false if request ID does not exist', () => {
    const result = updateRequestStatus('REQ999', 'Missed');
    expect(result).toBe(false);
  });

  test('updates status without affecting other records', () => {
    updateRequestStatus('REQ002', 'Missed');
    const all = getAllPickupRequests();
    expect(all.length).toBe(2);
    const untouched = all.find(r => r.id === 'REQ001');
    expect(untouched.status).toBe('Pending');
  });

  test('handles empty request list gracefully', () => {
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify([]));
    const result = updateRequestStatus('REQ001', 'Scheduled');
    expect(result).toBe(false);
  });
});
