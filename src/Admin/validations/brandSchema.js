import * as yup from 'yup';

export const brandSchema = yup.object().shape({
  name: yup.string().required(),
})

