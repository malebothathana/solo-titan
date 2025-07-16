function logout() {
  try {
    localStorage.removeItem('currentUser');
    return true;
  } catch (error) {
    console.error('Logout failed:', error);
    return false;
  }
}

function getCurrentUser() {
  try {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
}

module.exports = { logout, getCurrentUser };
