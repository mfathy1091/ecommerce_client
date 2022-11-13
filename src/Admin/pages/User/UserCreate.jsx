import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton, PageHeader } from "../../components"
import { useEffect, useState } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { userSchema } from "../../validations/userSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components'
import Select from 'react-select'



const CheckBoxContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`
const SingleSelect = styled.select`
padding: 5px;
width: 100%;
border: 1px  solid #efefef;
margin-bottom: 20px;
`


const UserCreate = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  const [roles, setRoles] = useState([]);
  
  const inititalDirtyFields = {
    fullName: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    roleId: false,
  }


  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, userSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/auth/register', {
        fullName: values.fullName,
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        roleId: values.roleId,
        isActive: values.isActive,
      });
      
      toast.success('Created!')
      navigate('/admin/user/list')

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
  console.log(roles);

  useEffect(() => {
    const getRoles = async () => {
      try {
        const res = await axiosPrivate.get('roles');
        // const rawData = res.data.map((role) => {
        //   return {value: role.id, label: role.name}
        // })
        setRoles(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getRoles()
	}, [])
  
  console.log(isValid)

  return (
    <div>
      <PageHeader category="Users" title="Create User" />
      <form onSubmit={handleSubmit}>

        <Input 
          name="fullName" 
          label="Full Name" 
          type='text' 
          placeholder="Full Name" 
          value={values.fullName} 
          onChange={handleChange} 
          required={true}
          error={errors.fullName}
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

        <SingleSelect 
          value={values.roleId}
          defaultValue={0}
          onChange={handleChange}
          name='roleId'
        >
          <option disabled value={0}>Select Role</option>
          {roles?.map( (role, i) => (
            <option value={role.id} key={i}>{role.name}</option>
          )
          )}
        </SingleSelect>
{/* 
        <lable>Role</lable>
        <Select 
        options={roles} 
        onChange={handleChangeSelect} 
        name='role_id'
        /> */}

        <CheckBoxContainer>
          <input 
            type="checkbox" 
            name="isActive" 
            value="1" 
            onChange={handleChange}
          />
          <span>Is Active</span>
        </CheckBoxContainer>

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