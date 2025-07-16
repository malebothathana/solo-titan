 
// tests/feedback.test.js

const { validateFeedbackForm } = require("../feedback");

describe("validateFeedbackForm()", () => {
  test("returns success true with all valid fields", () => {
    const result = validateFeedbackForm("REQ001", "Service Delay", "Collection was late.");
    expect(result.success).toBe(true);
    expect(result.feedback.reason).toBe("Service Delay");
  });

  test("returns error for missing requestId", () => {
    const result = validateFeedbackForm("", "Missed Pickup", "Not collected");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Request ID and reason are required/);
  });

  test("returns error for missing reason", () => {
    const result = validateFeedbackForm("REQ002", "", "Valid comment");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Request ID and reason are required/);
  });

  test("returns error for comment shorter than 2 characters", () => {
    const result = validateFeedbackForm("REQ003", "Rude Staff", "A");
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/at least 2 characters/);
  });

  test("accepts valid form with no comment", () => {
    const result = validateFeedbackForm("REQ004", "Other", "");
    expect(result.success).toBe(true);
    expect(result.feedback.comments).toBe("");
  });
});
