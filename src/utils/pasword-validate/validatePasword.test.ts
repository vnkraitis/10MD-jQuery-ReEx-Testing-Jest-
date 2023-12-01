
import { validatePassword } from './validatePassword';

describe('validatePassword', () => {
  it('should validate a password with a sufficient length, numbers, and special characters', () => {
    const password = 'Passw0rd!'; // This password is 9 characters long, includes a digit and a special character
    const result = validatePassword(password);
    expect(result).toEqual({
      valid: true,
      message: ""
    });
  });
});