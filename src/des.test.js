beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));
console.log('outer')
describe('extra', () => {
    console.log('extra')
    beforeEach(() => console.log('extra database setup'));
    afterEach(() => console.log('extra database teardown'));

    test('test 2', () => console.log('test 2'));
});

console.log('after')

// connection setup
// database setup
// test 1
// database teardown
// connection teardown

// connection setup
// database setup
// extra database setup
// test 2
// extra database teardown
// database teardown
// connection teardown