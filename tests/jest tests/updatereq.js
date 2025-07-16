// updatereq.js

const STORAGE_KEY = 'cleancity_pickup_requests';

function getAllPickupRequests() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function updateRequestStatus(requestId, newStatus) {
  const requests = getAllPickupRequests();
  const index = requests.findIndex(r => r.id === requestId);

  if (index === -1) return false;

  requests[index].status = newStatus;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
  return true;
}

module.exports = { updateRequestStatus, getAllPickupRequests };
