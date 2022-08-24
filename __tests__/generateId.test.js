const { generateId } = require('../utils/generateId');

test('returns a random 12 character id', () => {
    const id = generateId();

    expect(id.length).toBe(12);
});