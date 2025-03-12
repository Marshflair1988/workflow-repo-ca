import { expect, test, describe } from "vitest";
import { isActivePath } from "./activepathvalidation.js";

describe("isActivePath function", () => {
  test("returns true when current path matches href exactly", () => {
    // Arrange
    const currentPath = "/about";
    const href = "/about";
    
    // Act
    const result = isActivePath(currentPath, href);
    
    // Assert
    expect(result).toBe(true);
  });
  
  test("returns true for root path when path is '/' or '/index.html'", () => {
    // Test for "/"
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
    
    // Test for "/index.html"
    expect(isActivePath("/", "/index.html")).toBe(true);
    expect(isActivePath("/index.html", "/index.html")).toBe(true);
  });
  
  test("returns true when current path includes the href", () => {
    // Arrange
    const currentPath = "/blog/post-1";
    const href = "/blog";
    
    // Act
    const result = isActivePath(currentPath, href);
    
    // Assert
    expect(result).toBe(true);
  });
  
  test("returns false when paths don't match", () => {
    // Arrange
    const currentPath = "/about";
    const href = "/contact";
    
    // Act
    const result = isActivePath(currentPath, href);
    
    // Assert
    expect(result).toBe(false);
  });
}); 