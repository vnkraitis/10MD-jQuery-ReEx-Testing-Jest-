
import { validateUserName } from './validateUserName';

describe('validateUserName', () => {
  it('should validate a username with exactly 2 characters', () => {
    const userName = 'Al'; // Using 'Al', which is exactly 2 characters long
    const result = validateUserName(userName);
    expect(result).toEqual({
      valid: true,
      message: ""
    });
  });
});
