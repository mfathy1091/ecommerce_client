const EMAIL_REGEXP = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',);
const NUM_REGEXP = new RegExp('^[0-9]+$');

// starts with at least 1 lowercase letter, 1 uppercase letter, 1 digit
// 1 specicial character 
// total 8 to 24 characters
const PWD_REGEXP = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$');

// 4 to 24 characters
// starts with lower or upper case letter then be followed by 
// 3 to 23 characters lower or upper case letters, digits, or underscore
const USERNAME_REGEXP = new RegExp('^[A-z][A-z0-9-_]{3,23}$');

export class Validators {

  static required (value, message) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message: 'This field is required' };
  }
  return false;
  }

  

  static password (value, message) {
    const trimmedValue = value.trim();
    const matched = PWD_REGEXP.test(trimmedValue);
    if (!matched) {
      return { error: true, message: '8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character. Allowed special characters: !@#$%'}
    }
    return false;
  }

  static username (value, message) {
    const trimmedValue = value.trim();
    const matched = USERNAME_REGEXP.test(trimmedValue);
    if (!matched) {
      return { error: true, message: '4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.'}
    }
    return false;
  }

  static email (value, message) {
    const trimmedValue = value.trim();
    const matched = EMAIL_REGEXP.test(trimmedValue);
    if (!matched) {
      return { error: true, message: 'please enter a valid email'}
    }
    return false;
  }

  static number (value, message) {
    const trimmedValue = value.trim();
    const matched = NUM_REGEXP.test(trimmedValue);
    if (!matched) {
      return { error: true, message}
    }
    return false;
  }
}

export const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};

export const validate2 = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};