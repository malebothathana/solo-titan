 
// tests/register.test.js

const { validateRegistration } = require("../register");

const existingUsers = [
  { email: "user@cleancity.com", password: "password123", name: "User One" }
];

describe("validateRegistration()", () => {
  test("returns success true with valid data", () => {
    const result = validateRegistration(
      "New User",
      "new@cleancity.com",
      "pass123",
      "pass123",
      existingUsers
    );
    expect(result.success).toBe(true);
    expect(result.user).toEqual(expect.objectContaining({ email: "new@cleancity.com" }));
  });

  test("returns error for missing name", () => {
    const result = validateRegistration(
      "",
      "valid@cleancity.com",
      "pass123",
      "pass123",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/All fields/);
  });

  test("returns error for missing email", () => {
    const result = validateRegistration(
      "User",
      "",
      "pass123",
      "pass123",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/All fields/);
  });

  test("returns error for invalid email format", () => {
    const result = validateRegistration(
      "User",
      "invalid-email",
      "pass123",
      "pass123",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Invalid email/);
  });

  test("returns error for already existing email", () => {
    const result = validateRegistration(
      "User",
      "user@cleancity.com",
      "pass123",
      "pass123",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Email already exists/);
  });

  test("returns error for short password", () => {
    const result = validateRegistration(
      "User",
      "short@cleancity.com",
      "12",
      "12",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Password must be at least 3/);
  });

  test("returns error for mismatched passwords", () => {
    const result = validateRegistration(
      "User",
      "match@cleancity.com",
      "pass123",
      "pass321",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Passwords do not match/);
  });

  test("returns error for name shorter than 2 characters", () => {
    const result = validateRegistration(
      "A",
      "shortname@cleancity.com",
      "pass123",
      "pass123",
      existingUsers
    );
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Name must be at least 2/);
  });
});
