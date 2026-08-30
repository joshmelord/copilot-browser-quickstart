import test from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from '../is_palindrome.js';

test('empty string is palindrome', () => {
  assert.equal(isPalindrome(''), true);
});

test('single character is palindrome', () => {
  assert.equal(isPalindrome('A'), true);
});

test('simple palindrome (lowercase)', () => {
  assert.equal(isPalindrome('racecar'), true);
});

test('simple palindrome (mixed case)', () => {
  assert.equal(isPalindrome('RaceCar'), true);
});

test('non-palindrome string', () => {
  assert.equal(isPalindrome('hello'), false);
});

test('strings with spaces/punctuation are not normalized (expected false)', () => {
  // The function does not strip spaces/punctuation, so this is false
  assert.equal(isPalindrome('A man, a plan, a canal, Panama'), false);
});

test('two-character non-palindrome', () => {
  assert.equal(isPalindrome('ab'), false);
});

test('array of characters (strings) palindrome', () => {
  assert.equal(isPalindrome(['a', 'b', 'a']), true);
});

test('array of characters (mixed case) palindrome', () => {
  assert.equal(isPalindrome(['A', 'B', 'A']), true);
});

test('array of numbers palindrome', () => {
  assert.equal(isPalindrome([1, 2, 1]), true);
});

test('array mixed types not equal', () => {
  // numbers and string "1" are not coerced to same type by the function
  assert.equal(isPalindrome([1, '1']), false);
});
