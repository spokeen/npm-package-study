const sum = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

beforeAll(() => console.log('2 - beforeAll'));

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('number', () => {
    const z = 0;
    expect(z).toBe(0);
    expect(z).toBeGreaterThan(-1);
    expect(z).toBeGreaterThanOrEqual(-1);
    expect(z).toBeLessThan(1);
    expect(z).toBeLessThanOrEqual(1);
    expect(0.1 + 0.2).toBeCloseTo(0.3)
});

