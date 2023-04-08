import { PalindromeChecker } from './palindrome';

import { test } from '@jest/globals';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('should be able to tell that "mom" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
  });

  it('should be able to tell that a palindrome number in string is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('101')).toBeTruthy();
  });

  it('should be able to tell that "bill" isnt a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
  });

  it('should be able to tell that a non palindrome number in string isnt a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('123')).toBeFalsy();
  });

  it('should still detect a palindrome even if the casing is off', () => {
    expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy();
  });

  it('should be able to tell that "Was It A Rat I Saw" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('Was It A Rat I Saw')).toBeTruthy();
  });

  it('should be able to tell that "Never Odd or Even" is palindrome', () => {
    expect(palindromeChecker.isAPalindrome('Never Odd or Even')).toBeTruthy();
  });

  test.each<{ input: string; expected: boolean }>([
    { input: 'hello', expected: false },
    { input: 'bob', expected: true },
    { input: '101', expected: true },
    { input: '102', expected: false },
  ])('Test a lot of inputs', ({ input, expected }) => {
    expect(palindromeChecker.isAPalindrome(input)).toBe(expected);
  });
});
