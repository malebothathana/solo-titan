 
// tests/pickup.test.js

const { validatePickupForm } = require("../pickup");

describe("validatePickupForm()", () => {
  test("returns success true with valid inputs", () => {
    const result = validatePickupForm("John Doe", "Nairobi", "Plastic", "2025-08-01");
    expect(result.success).toBe(true);
    expect(result.request.status).toBe("Pending");
  });

  test("returns error for missing name", () => {
    const result = validatePickupForm("", "Nairobi", "Plastic", "2025-08-01");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/All fields/);
  });

  test("returns error for missing location", () => {
    const result = validatePickupForm("John", "", "Plastic", "2025-08-01");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/All fields/);
  });

  test("returns error for missing wasteType", () => {
    const result = validatePickupForm("John", "Nairobi", "", "2025-08-01");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/All fields/);
  });

  test("returns error for missing preferredDate", () => {
    const result = validatePickupForm("John", "Nairobi", "Plastic", "");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/All fields/);
  });

  test("returns error for short name", () => {
    const result = validatePickupForm("A", "Nairobi", "Plastic", "2025-08-01");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Name must be at least 2/);
  });

  test("returns error if wasteType is 'Other' and location is vague", () => {
    const result = validatePickupForm("John", "A", "Other", "2025-08-01");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Specify more details for location/);
  });
});
