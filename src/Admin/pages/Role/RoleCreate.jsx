import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton, PageHeader } from "../../components"
import { useState } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { roleSchema } from "../../validations/roleSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components'


const RoleCreate = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  
  const inititalDirtyFields = {
    name: false,
  }



  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, roleSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/roles', {
        name: values.name,
      });
      
      toast.success('Created!')
      navigate('/admin/role/list')

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
      <PageHeader category="Roles" title="Create Role" />
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

export default RoleCreate