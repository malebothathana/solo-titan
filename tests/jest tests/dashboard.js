 
// dashboard.js

function filterByStatus(requests, status) {
  return requests.filter((r) => r.status === status);
}

function filterByLocation(requests, location) {
  return requests.filter((r) => r.location === location);
}

module.exports = { filterByStatus, filterByLocation };

// ------------------------------------------------------------
// Test Cases for filterByStatus()
// ------------------------------------------------------------
// TC01: Filters and returns only requests with status "Pending"
// TC02: Filters and returns only requests with status "Completed"
// TC03: Returns an empty array if no status matches
//
// Test Cases for filterByLocation()
// ------------------------------------------------------------
// TC04: Filters and returns only requests from "Nairobi"
// TC05: Filters and returns only requests from "Eldoret"
// TC06: Returns an empty array if no location matches
