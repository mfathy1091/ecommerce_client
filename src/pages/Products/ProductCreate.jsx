import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton, PageHeader } from "../../components"
import { useState } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { productSchema } from "../../validations/productSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components'

const Select = styled.select`
  padding: 5px;
  width: 100%;
  border: 1px  solid #efefef;
  margin-bottom: 20px;
`

const TextArea = styled.textarea`
  
`

const ProductCreate = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  
  const inititalDirtyFields = {
    category_id: false,
    name: false,
    description: false,
  }



  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, productSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/products', {
        category_id: values.category_id,
        name: values.name,
        description: values.description,
      });
      
      toast.success('Created!')
      navigate('/products')

    } catch (err) {
      console.log(err)
      const responseStatus = err?.response?.status;
      
      // handle error with no response
      if(responseStatus === 0){
        toast.error('Network Error');
      }
      // at this point, we know we have a response
      else if (responseStatus === 400) {
        toast.error(err.response?.data.message);
      }
      else if (responseStatus === 401) {
        toast.error(err.response?.data.message);
      }
      else if (responseStatus === 422) {
        toast.error('Some fields have validation errors');
      }else {
        toast.error(err.status);
      }
    } finally {
      setIsSubmitting(false);
    }

  });

  
  return (
    <div>
      <PageHeader category="Products" title="Create Product" />
      <form onSubmit={handleSubmit}>

      <Select 
          value={values.category_id}
          onChange={handleChange}
          name='category_id'
        >
          <option disabled>Select Category</option>
          <option value='2'>Sunglasses</option>
          <option value='3'>Eyeglasses</option>
          <option value='4'>Accessories</option>
        </Select>

        <Input 
            name="name" 
            label="User Name" 
            type='text' 
            placeholder="User Name" 
            value={values.name} 
            onChange={handleChange} 
            // pattern="^"
            required={true}
            error={errors.name}
          />

          <Input 
            name="description" 
            label="Description" 
            type='text' 
            placeholder="Description" 
            value={values.description} 
            onChange={handleChange}
            required={true}
            error={errors.description}
          />
          

          <LoadingButton 
            onClick={ (e) => {} }
            className='btn btn-primary btn-md'
            disabledOnLoading={true}
            disabled={!isValid}
            loading={isSubmitting}
          >
            Create  
          </LoadingButton>
        </form>
    </div>
  )
}

export default ProductCreate