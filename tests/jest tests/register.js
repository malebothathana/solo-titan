

function validateRegistration(name, email, password, confirmPassword, existingUsers = []) {
  if (!name || !email || !password || !confirmPassword) {
    return { success: false, error: "All fields are required." };
  }

  if (name.trim().length < 2) {
    return { success: false, error: "Name must be at least 2 characters." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email format." };
  }

  if (existingUsers.some((u) => u.email === email)) {
    return { success: false, error: "Email already exists." };
  }

  if (password.length < 3) {
    return { success: false, error: "Password must be at least 3 characters." };
  }

  if (password !== confirmPassword) {
    return { success: false, error: "Passwords do not match." };
  }

  const newUser = {
    name,
    email,
    password,
    role: "user",
    createdAt: new Date().toISOString(),
  };

  return { success: true, user: newUser };
}

module.exports = { validateRegistration };

// ------------------------------------------------------------
// Test Cases for validateRegistration()
// ------------------------------------------------------------
// TC01: All valid inputs should return success = true and user object
// TC02: Missing name should return error: "All fields are required."
// TC03: Missing email should return error: "All fields are required."
// TC04: Invalid email format should return error: "Invalid email format."
// TC05: Email already exists should return error: "Email already exists."
// TC06: Password too short (<3) should return error: "Password must be at least 3 characters."
// TC07: Password and confirmPassword mismatch should return error: "Passwords do not match."
// TC08: Name too short should return error: "Name must be at least 2 characters."
