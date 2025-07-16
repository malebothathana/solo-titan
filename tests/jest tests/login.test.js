// tests/login.test.js

const { login } = require("../login");

const demoUsers = [
  { email: "user@cleancity.com", password: "password123", role: "user" },
  { email: "admin@cleancity.com", password: "admin123", role: "admin" },
];

describe("login()", () => {
  test("returns user object for correct credentials", () => {
    const result = login("user@cleancity.com", "password123", demoUsers);
    expect(result).toEqual(
      expect.objectContaining({ email: "user@cleancity.com", role: "user" })
    );
  });

  test("returns false for wrong password", () => {
    const result = login("user@cleancity.com", "wrongpass", demoUsers);
    expect(result).toBe(false);
  });

  test("returns false for non-existent email", () => {
    const result = login("ghost@cleancity.com", "password123", demoUsers);
    expect(result).toBe(false);
  });

  test("returns false if email is empty", () => {
    const result = login("", "password123", demoUsers);
    expect(result).toBe(false);
  });

  test("returns false if password is empty", () => {
    const result = login("user@cleancity.com", "", demoUsers);
    expect(result).toBe(false);
  });

  test("returns correct role for admin login", () => {
    const result = login("admin@cleancity.com", "admin123", demoUsers);
    expect(result.role).toBe("admin");
  });
});
 
