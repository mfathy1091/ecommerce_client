import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton } from "../../components"
import { useState } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { attributeSchema } from "../../validations/attributeSchema"
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const SubHeader = styled.h1`
  margin: 15px 0 30px 0;
  font-size: 16px;
  font-weight: 500;
`
const AttributeValueCreate = ({attribute, callBack}) => {
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const { attributeId } = useParams();

  const inititalDirtyFields = {
    name: false,
    slug: false,
  }

  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, attributeSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/attribute-values', {
        attributeId: attributeId,
        name: values.name,
        slug: values.slug,
      });
      
      toast.success('Created!')
      callBack();
      setValues({
        name: '',
        slug: '',
      })

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
      <SubHeader>Add New Attribute Value</SubHeader>
      <form onSubmit={handleSubmit}>
      <Input 
          name="name" 
          label="Name" 
          type='text' 
          placeholder="Name" value={values.name} 
          onChange={handleChange} 
          required={true}
          error={errors.name}
        />

        <Input 
          name="slug" 
          label="Slug" 
          type='text' 
          placeholder="Slug" value={values.slug} 
          onChange={handleChange} 
          required={true}
          error={errors.slug}
        />    
        

        <LoadingButton 
          onClick={ (e) => {} }
          className='btn btn-primary btn-md'
          disabledOnLoading={true}
          disabled={!isValid}
          loading={isSubmitting}
        >
          Add New {attribute.name}
        </LoadingButton>
      </form>
        
    </div>
  )
}

export default AttributeValueCreate