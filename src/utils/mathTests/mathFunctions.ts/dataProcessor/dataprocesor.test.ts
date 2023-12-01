
import { processData } from './dataprocessor';

describe('processData', () => {
  it('should correctly sum all numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5]; // This array sums up to 15
    const result = processData(numbers);
    expect(result).toBe(15);
  });
});
