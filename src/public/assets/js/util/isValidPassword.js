function isValidPassword(password) {
  if (password.length < 6) return false;
  return true;
}

export { isValidPassword };
