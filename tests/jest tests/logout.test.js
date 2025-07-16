// logout.js

function logout() {
  try {
    localStorage.removeItem('currentUser');
    return true;
  } catch (error) {
    console.error('Logout failed:', error);
    return false;
  }
}

function getCurrentUser() {
  try {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
}

module.exports = { logout, getCurrentUser };

// -----------------------------------------------------------------------------
// tests/logout.test.js

const { logout, getCurrentUser } = require('../logout');

// Manual mock of localStorage
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
  localStorage.setItem('currentUser', JSON.stringify({
    id: '123',
    name: 'Demo User',
    email: 'user@cleancity.com',
    role: 'user'
  }));
});

describe('logout()', () => {
  test('removes currentUser from localStorage', () => {
    expect(getCurrentUser()).not.toBeNull();
    logout();
    expect(getCurrentUser()).toBeNull();
  });

  test('returns true on successful logout', () => {
    const result = logout();
    expect(result).toBe(true);
  });

  test('does nothing if currentUser does not exist', () => {
    localStorage.removeItem('currentUser');
    const result = logout();
    expect(result).toBe(true);
    expect(getCurrentUser()).toBeNull();
  });

  test('returns false if an error occurs (mocked)', () => {
    const originalRemove = localStorage.removeItem;
    localStorage.removeItem = jest.fn(() => {
      throw new Error('simulated');
    });

    const result = logout();
    expect(result).toBe(false);

    localStorage.removeItem = originalRemove;
  });
});
