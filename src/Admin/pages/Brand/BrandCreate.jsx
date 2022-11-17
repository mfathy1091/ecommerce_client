import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton, PageHeader } from "../../components"
import { useState } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { brandSchema } from "../../validations/brandSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components'


const BrandCreate = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  
  const inititalDirtyFields = {
    name: false,
  }



  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, brandSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    const spacesReplaced = values.name.replaceAll(' ', '-').toLowerCase();
    try {
      const res = await axiosPrivate.post('/brands', {
        name: values.name,
        slug: spacesReplaced
      });
      
      toast.success('Created!')
      navigate('/admin/brand/list')

    } catch (err) {

    } finally {
      setIsSubmitting(false);
    }

  });

  
  return (
    <div>
      <PageHeader category="Brands" title="Create Brand" />
      <form onSubmit={handleSubmit}>
        <Input 
            name="name" 
            label="Name" 
            type='text' 
            placeholder="Name" 
            value={values.name} 
            onChange={handleChange} 
            // pattern="^"
            required={true}
            error={errors.name}
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

export default BrandCreate