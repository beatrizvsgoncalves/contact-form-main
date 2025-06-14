export function isEmpty(value) {
  return !value || value.trim() === ''
}

export function isEmail(value) {
  return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function hasMinimunSize(value) {
  return value.length < 2
}

export function hasNumber(value) {
  return /\d/.test(value)
}

export function isChecked(input) {
  return !input.checked
}