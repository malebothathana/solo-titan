 
// pickup.js

function validatePickupForm(name, location, wasteType, preferredDate) {
  if (!name || !location || !wasteType || !preferredDate) {
    return { success: false, error: "All fields are required." };
  }

  if (name.trim().length < 2) {
    return { success: false, error: "Name must be at least 2 characters." };
  }

  if (wasteType === "Other" && location.trim().length < 3) {
    return { success: false, error: "Specify more details for location." };
  }

  const pickupRequest = {
    name,
    location,
    wasteType,
    preferredDate,
    status: "Pending",
    createdAt: new Date().toISOString()
  };

  return { success: true, request: pickupRequest };
}

module.exports = { validatePickupForm };

// ------------------------------------------------------------
// Test Cases for validatePickupForm()
// ------------------------------------------------------------
// TC01: All valid inputs should return success = true and request object
// TC02: Missing name should return error: "All fields are required."
// TC03: Missing location should return error: "All fields are required."
// TC04: Missing wasteType should return error: "All fields are required."
// TC05: Missing preferredDate should return error: "All fields are required."
// TC06: Name too short should return error: "Name must be at least 2 characters."
// TC07: If wasteType is 'Other' and location is too short, return error
