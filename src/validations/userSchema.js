import * as yup from 'yup';

export const userSchema = yup.object().shape({
  fullName: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password")], 'Passwords must match'),
  roleId: yup.string().required(),
})

