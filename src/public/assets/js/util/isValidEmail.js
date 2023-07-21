function isValidEmail(email) {
  if (!email.includes('@')) return false;
  if (!email.includes('.')) return false;
  if (email.length < 9) return false;
  return true;
}

export { isValidEmail };
