import { expect, test, describe, beforeEach, afterEach } from 'vitest';
import { getUserName } from './user.js';

describe('getUserName function', () => {
  // Clear localStorage before and after each test
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('returns the name from the user object in storage', () => {
    // Arrange: Save a user object to storage
    const mockUser = { name: 'John Doe', email: 'john@example.com' };
    localStorage.setItem('user', JSON.stringify(mockUser));

    // Act: Call the function
    const result = getUserName();

    // Assert: Verify it returns the correct name
    expect(result).toBe('John Doe');
  });

  test('returns null when no user exists in storage', () => {
    // Act: Call the function (with empty localStorage)
    const result = getUserName();

    // Assert: Verify it returns null
    expect(result).toBeNull();
  });
});
