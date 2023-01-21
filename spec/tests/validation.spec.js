import { isBetween1and100, isNumber } from '../../util/validation.js';

describe('isBetween1and100', () => {
  it('returns true if input is between 1 and 100', () => {
    const expected = true;
    const value = isBetween1and100(55);

    expect(value).toBe(expected)
  });

  it('returns false if input is out of range of 1 and 100', () => {
    const expected = false;
    const value = isBetween1and100(100000);

    expect(value).toBe(expected)
  })
});

describe('isNumber', () => {
  it('returns true if input is a number', () => {
    const expected = true;
    const value = isNumber(1);

    expect(value).toBe(expected)
  });

  it('returns false if input is not a number', () => {
    const expected = false;
    const value = isNumber('test');

    expect(value).toBe(expected)
  });
})
