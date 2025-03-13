/**
 * Gets the user's name from localStorage
 * @returns {string|null} The user's name or null if no user exists
 */
export function getUserName() {
    try {
      const userJson = localStorage.getItem('user');
      if (!userJson) return null;
      
      const user = JSON.parse(userJson);
      return user.name || null;
    } catch (error) {
      console.error('Error getting user name:', error);
      return null;
    }
  }