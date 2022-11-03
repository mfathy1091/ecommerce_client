import * as yup from 'yup';

export const productSchema = yup.object().shape({
  productName: yup.string().required(),
  price: yup.string().required(),
})

