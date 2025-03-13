import { expect, test, describe } from 'vitest';
import { isActivePath } from './activepathvalidation.js';

describe('isActivePath function', () => {
  test('returns true when current path matches href exactly', () => {
    const currentPath = '/about';
    const href = '/about';
    const result = isActivePath(currentPath, href);

    expect(result).toBe(true);
  });

  test("returns true for root path when path is '/' or '/index.html'", () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/index.html', '/')).toBe(true);

    expect(isActivePath('/', '/index.html')).toBe(true);
    expect(isActivePath('/index.html', '/index.html')).toBe(true);
  });

  test('returns true when current path includes the href', () => {
    const currentPath = '/blog/post-1';
    const href = '/blog';
    const result = isActivePath(currentPath, href);

    expect(result).toBe(true);
  });

  test("returns false when paths don't match", () => {
    const currentPath = '/about';
    const href = '/contact';
    const result = isActivePath(currentPath, href);

    expect(result).toBe(false);
  });
});
