 
// tests/dashboard.test.js

const { filterByStatus, filterByLocation } = require("../dashboard");

const sampleRequests = [
  { id: 1, status: "Pending", location: "Nairobi" },
  { id: 2, status: "Completed", location: "Nairobi" },
  { id: 3, status: "Pending", location: "Eldoret" },
  { id: 4, status: "Scheduled", location: "Mombasa" }
];

describe("filterByStatus()", () => {
  test('filters requests with status "Pending"', () => {
    const result = filterByStatus(sampleRequests, "Pending");
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.status === "Pending")).toBe(true);
  });

  test('filters requests with status "Completed"', () => {
    const result = filterByStatus(sampleRequests, "Completed");
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("Completed");
  });

  test("returns empty array if no status matches", () => {
    const result = filterByStatus(sampleRequests, "Cancelled");
    expect(result).toEqual([]);
  });
});

describe("filterByLocation()", () => {
  test('filters requests from "Nairobi"', () => {
    const result = filterByLocation(sampleRequests, "Nairobi");
    expect(result).toHaveLength(2);
    expect(result.every((r) => r.location === "Nairobi")).toBe(true);
  });

  test('filters requests from "Eldoret"', () => {
    const result = filterByLocation(sampleRequests, "Eldoret");
    expect(result).toHaveLength(1);
    expect(result[0].location).toBe("Eldoret");
  });

  test("returns empty array if no location matches", () => {
    const result = filterByLocation(sampleRequests, "Kisumu");
    expect(result).toEqual([]);
  });
});
