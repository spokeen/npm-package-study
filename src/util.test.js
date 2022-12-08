const add = require('./util')

beforeAll(() => console.log('1 - beforeAll'));

beforeEach(() => console.log('1 - beforeEach'));

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

afterEach(() => console.log('1 - afterEach'));

afterAll(() => console.log('1 - afterAll'));