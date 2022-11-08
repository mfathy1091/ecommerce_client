import * as yup from 'yup';

export const attributeSchema = yup.object().shape({
  name: yup.string().required(),
  slug: yup.string().required(),
})

