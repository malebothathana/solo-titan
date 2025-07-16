 
// admin.js

// --- Admin Utility Functions ---

function getAllRequests() {
  const data = localStorage.getItem('cleancity_pickup_requests');
  return data ? JSON.parse(data) : [];
}

function updateRequestStatus(requestId, newStatus) {
  const requests = getAllRequests();
  const index = requests.findIndex(req => req.id === requestId);

  if (index !== -1) {
    requests[index].status = newStatus;
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify(requests));
    return true;
  }

  return false;
}

function calculateStats() {
  const all = getAllRequests();
  const stats = {
    total: all.length,
    pending: all.filter(r => r.status === 'Pending').length,
    scheduled: all.filter(r => r.status === 'Scheduled').length,
    completed: all.filter(r => r.status === 'Completed').length,
    missed: all.filter(r => r.status === 'Missed').length
  };
  return stats;
}

module.exports = {
  getAllRequests,
  updateRequestStatus,
  calculateStats
};

// --- TEST CASES ---
//
//  getAllRequests returns all requests from localStorage
//  updateRequestStatus updates the correct request and returns true
//  updateRequestStatus returns false if request ID not found
//  calculateStats returns accurate counts for each status
//  calculateStats returns zeroes for empty data
