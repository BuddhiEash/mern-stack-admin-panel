import { user } from '../components/user.js'

test('user returns username', () => {
    expect(user()).toBe('Some text')
});