import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton, PageHeader } from "../../components"
import { useState } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { userSchema } from "../../validations/userSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components'

const Select = styled.select`
  padding: 5px;
  width: 100%;
  border: 1px  solid #efefef;
  margin-bottom: 20px;
`

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`


const TextArea = styled.textarea`
  
`

const UserCreate = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  
  const inititalDirtyFields = {
    name: false,
    username: false,
    password: false,
    confirmPassword: false,
  }



  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, userSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/auth/register', {
        name: values.name,
        username: values.username,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      
      toast.success('Created!')
      navigate('/users')

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
  console.log(errors);
  
  return (
    <div>
      <PageHeader category="Users" title="Create User" />
      <form onSubmit={handleSubmit}>

        <Input 
          name="name" 
          label="Name" 
          type='text' 
          placeholder="Name" 
          value={values.name} 
          onChange={handleChange} 
          required={true}
          error={errors.name}
        />

        <Input 
          name="username" 
          label="Username" 
          type='text' 
          placeholder="Username" 
          value={values.username} 
          onChange={handleChange}
          required={true}
          error={errors.username}
        />

        <Input 
          name="email" 
          label="Email" 
          type='text' 
          placeholder="Email" 
          value={values.email} 
          onChange={handleChange}
          required={true}
          error={errors.email}
        />

        <Input 
          name="password" 
          label="Password" 
          type='password' 
          placeholder="Password" 
          value={values.password} 
          onChange={handleChange}
          required={true}
          error={errors.password}
        />

        <Input 
          name="confirmPassword" 
          label="Confirm Password" 
          type='password' 
          placeholder="Confirm Password" 
          value={values.confirmPassword} 
          onChange={handleChange}
          required={true}
          error={errors.confirmPassword}
        />



          <span>Is Active</span>
          <input 
            type="checkbox" 
            name="isActive" 
            id="GFG"
            value="1" Checked 
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

export default UserCreate