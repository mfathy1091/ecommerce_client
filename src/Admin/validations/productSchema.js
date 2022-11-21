import * as yup from 'yup';

export const productSchema = yup.object().shape({
  brandId: yup.number().required().positive().integer(),
  categoryId: yup.number().required().positive().integer(),
  name: yup.string().required(),
  description: yup.string().required(),
  images: yup.array(),
})

