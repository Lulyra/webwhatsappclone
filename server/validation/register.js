import validator from 'validator';
import isEmpty from './isEmpty.js';

export default function validateRegisterInput(data) {
  const errors = {};

  if (isEmpty(data.name)) errors.name = 'Name field is required.';
  if (isEmpty(data.email)) errors.email = 'Email is invalid.';
  if (isEmpty(data.password)) errors.password = 'password field is required.';

  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = 'Name must be between 3 and 30 characters.';
  } else if (!validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
