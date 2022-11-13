import * as yup from 'yup';

export const categorySchema = yup.object().shape({
  parentCategoryId: yup.number().integer(),
  name: yup.string().required(),
  slug: yup.string().required(),
  // image: yup.string().url(),
  //isActive: yup.boolean().required(),
})

