import { useState } from 'react';
import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from "../utils/validationChecks"

const inputFocused(errors) => {
  const errorsToArray = Object.entries(errors);
  const reducedFieldProps = errorsToArray.reduce( (accumulate, [field, fieldProps]) => {
    accumulate[field] = {
      ...fieldProps,
      focused: true
    };
    return accumulate;
  }, {});
  return reducedFieldProps;
}

export const useRegisterValidator = (formData) => {
  const [erros, setErrors] = useState({
    username: {
      focused: false,
      error: false,
      message: '',
    },
    email: {
      focused: false,
      error: false,
      message: '',
    },
    password: {
      focused: false,
      error: false,
      message: '',
    },
    confirmPassword: {
      focused: false,
      error: false,
      message: '',
    },
  });

  const validateFormData = ({ formData, field, errors, applyInputFocused=false }) => {
    let isValid = true;
    const { username, email, password, confirmPassword } = formData;
    let updatedErrors = JSON.parse(JSON.stringify(errors));
  }

  if(applyInputFocused) {
    updatedErrors = inputFocused(errors)
  }

  return {}
}