 
// dataService.js

const STORAGE_KEYS = {
  PICKUP_REQUESTS: 'cleancity_pickup_requests',
  FEEDBACK: 'cleancity_feedback',
  USERS: 'cleancity_users'
};

// Initialize default values into localStorage
const initializeData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) {
    const sampleRequests = [
      {
        id: 'REQ001',
        name: 'Jane Doe',
        location: 'Nairobi',
        wasteType: 'Recyclable',
        preferredDate: '2024-01-10',
        status: 'Pending'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(sampleRequests));
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const sampleUsers = [
      {
        id: '1',
        name: 'Admin',
        email: 'admin@cleancity.com',
        password: 'admin123',
        role: 'admin',
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(sampleUsers));
  }

  if (!localStorage.getItem(STORAGE_KEYS.FEEDBACK)) {
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
  }
};

const dataService = {
  // Pickup Requests
  getAllPickupRequests: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PICKUP_REQUESTS)) || [];
  },

  addPickupRequest: (data) => {
    const requests = dataService.getAllPickupRequests();
    const newRequest = {
      id: `REQ${String(requests.length + 1).padStart(3, '0')}`,
      name: data.fullName,
      location: data.location,
      wasteType: data.wasteType,
      preferredDate: data.preferredDate || 'Not specified',
      status: 'Pending'
    };
    requests.push(newRequest);
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
    return newRequest;
  },

  updateRequestStatus: (requestId, status) => {
    const requests = dataService.getAllPickupRequests();
    const index = requests.findIndex(req => req.id === requestId);
    if (index === -1) return false;
    requests[index].status = status;
    localStorage.setItem(STORAGE_KEYS.PICKUP_REQUESTS, JSON.stringify(requests));
    return true;
  },

  // Users
  getAllUsers: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  },

  addUser: (user) => {
    const users = dataService.getAllUsers();
    if (users.find(u => u.email === user.email)) return false;
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return true;
  },

  // Reset for testing
  clearAllData: () => {
    localStorage.clear();
    initializeData();
  }
};

initializeData();

module.exports = dataService;

// --- TEST CASES ---
//
//  getAllPickupRequests returns requests
//  addPickupRequest adds correctly
//  updateRequestStatus works
//  getAllUsers and addUser behave correctly
//  clearAllData resets everything
