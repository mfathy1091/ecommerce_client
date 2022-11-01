import * as yup from 'yup';

export const beneficiarySchema = yup.object().shape({
  fullName: yup.string().required(),
  fileNumber: yup.string().required(),
  individualNumber: yup.string().required(),
  passportNumber: yup.string().required(),
})

