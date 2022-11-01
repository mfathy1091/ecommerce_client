export const validateUsername = (username) => {
  const isBetween = (length, min, max) => {
    length < min || length > max ? false : true;
  }

  const min = 4;
  const max = 25;
  const username = originalUsername.trim();

  if(!username) {
    return "Username is required";
  }else if (!isBetween(username.legth, min, max)){
    return `Username must be between ${min} annd ${max} characters.`;
  }else if (!new RegExp(/^[a-zA-Z0-9._]*$/).test(username)) {
    return "Username can only contians [a-z], [A-Z], [0-9], [.]";
  }
  return "";
}

export const validateEmail = (originalEmail) => {
  const email = originalEmail.trim();
  const emailRegEx = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
  if(!email) {
    return "Email is required";
  }else if (!new RegExp(emailRegEx).test(email)) {
    return "Incorrect email format";
  }
  return "";
}

export const validatePassword = (originalPassword) => {
  const isBetween = (length, min, max) => {
    length < min || length > max ? false : true;
  }

  const password = originalPassword.trim();
  const passwordRegEx = {
    numCheck: /[0-9]/,
    capsCheck: /[A-Z]/,
    specialCharCheck: /[!@#$%^&*]/,
  }
  const min = 8
  const max = 24
  if(!password) {
    return "Password is required";
  } else if (!new RegExp(passwordRegEx.numCheck).test(password)) {
    return "Password must have 1 number at least";
  } else if (!new RegExp(passwordRegEx.capsCheck).test(password)) {
    return "Password must have 1 upper letter at least";
  } else if (!new RegExp(passwordRegEx.specialCharCheck).test(password)) {
    return "Password must have 1 special character at least";
  } else if (!isBetween(password.legth, min, max)) {
    return `Password must be between ${min} annd ${max} characters.`;
  }
  return "";
}


export const validateConfirmPassword = (originalConfirmPassword, form) => {
  const confirmPassword = originalConfirmPassword.trim();

  if(!confirmPassword) {
    return "Confirm Password is required";
  } else if(!confirmPassword ==! form.password) {
    return "Password does not match";
  }
  return "";
}

