// awareness.test.js

const { getAwarenessCards } = require('./awareness');

describe('Awareness Cards', () => {
  const cards = getAwarenessCards();

  test('should return 3 awareness cards', () => {
    expect(cards.length).toBe(3);
  });

  test('each card should have title, image, and topics', () => {
    cards.forEach(card => {
      expect(card).toHaveProperty('title');
      expect(card).toHaveProperty('image');
      expect(card).toHaveProperty('topics');
      expect(Array.isArray(card.topics)).toBe(true);
    });
  });

  test('each card should have at least 3 topics', () => {
    cards.forEach(card => {
      expect(card.topics.length).toBeGreaterThanOrEqual(3);
    });
  });

  test('images should be valid HTTPS URLs (dynamic/CDN-safe)', () => {
    cards.forEach(card => {
      expect(card.image).toMatch(/^https:\/\/.+/);
    });
  });
});
