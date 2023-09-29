const user = require('../components/user.js');

test('user returns username', () => {
    expect(user()).toBe('Some text');
});