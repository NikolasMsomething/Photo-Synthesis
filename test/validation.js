import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isBetween1and100, isNumber } from '../util/validation.js';

describe('isBetween1and100', () => {
  it('returns true if input is between 1 and 100', () => {
    const expected = true;
    const value = isBetween1and100(55);

    assert.strictEqual(expected, value);
  });

  it('returns false if input is out of range of 1 and 100', () => {
    const expected = false;
    const value = isBetween1and100(100000);

    assert.strictEqual(expected, value);
  })
});

describe('isNumber', () => {
  it('returns true if input is a number', () => {
    const expected = true;
    const value = isNumber(1);

    assert.strictEqual(expected, value);
  });

  it('returns false if input is not a number', () => {
    const expected = false;
    const value = isNumber('test');

    assert.strictEqual(expected, value);
  });
})
