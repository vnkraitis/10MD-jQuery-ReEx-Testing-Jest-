
import { validateEmail } from './e-mailValidate';

describe('validateEmail', () => {
  it('should validate a correctly formatted email', () => {
    const email = 'test@example.com'; // This is a correctly formatted email
    const result = validateEmail(email);
    expect(result).toEqual({
      valid: true,
      message: ""
    });
  });
});
