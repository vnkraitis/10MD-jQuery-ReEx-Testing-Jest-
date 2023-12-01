
import { multiply } from './2cond';

describe('multiply', () => {
  it('should correctly multiply two numbers', () => {
    const result = multiply(3, 4);
    expect(result).toBe(12);
  });
});
