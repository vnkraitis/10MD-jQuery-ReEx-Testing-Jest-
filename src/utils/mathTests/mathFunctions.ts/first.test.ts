// add.test.ts
import { add } from './first';

describe('add', () => {
  it('should correctly add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});