 // login.js

function login(email, password, users = []) {
  if (!email || !password) return false;

  const match = users.find(
    (user) => user.email === email && user.password === password
  );

  return match || false;
}

module.exports = { login };


//  TEST CASES FOR login()


//  TC01: Login with valid email and password (user)
//  TC02: Login with valid email and password (admin)
//  TC03: Login fails with incorrect password
//  TC04: Login fails with unknown email
//  TC05: Login fails if email is empty
//  TC06: Login fails if password is empty
//  TC07: Returned object should include correct role
//
// Notes:
// - This function is pure — no side effects like saving to localStorage
// - It returns the matched user object or false
// - Unit-tested in tests/login.test.js
//
// Dependencies:
// - Receives an array of users (e.g., from a DB or localStorage wrapper)
//


