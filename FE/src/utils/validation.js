/**
 * Validation utilities for form fields
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 6

export const validateEmail = (email) => {
  if (!email) {
    return 'Email is required! ✨'
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'Please enter a valid email address! 💌'
  }
  return ''
}

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required! 🔒'
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return 'Password must be at least 6 characters! 🌟'
  }
  return ''
}

export const validationRules = {
  email: validateEmail,
  password: validatePassword,
}

