import './login.css'

import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom'
import axios from '../../api/axios';
import {axiosPublic, axiosPrivate} from '../../api/axiosNew'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import { LoadingButton, Input } from '../../components';
import useForm from '../../hooks/useForm';
import { validate } from '../../utils/validate';
import { loginSchema } from '../../validations/LoginValidation';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

const CheckboxContainer = styled.div`
  display: flex;
  gap: 5px;
  margin: 15px 0;
  align-items: center;
`

const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  margin: 0 5px 2px 2px;
`

const Login = () => {
  const [user, resetUSer, userAttribs] = useInput('')

  const { accessToken, setAccessToken, setCurrentUser, setIsLoggedIn, persist, setPersist } = useAuth();
  const [ isSubmitting, setIsSubmitting ] = useState(false); 

  const navigate = useNavigate();
  const location = useLocation();
  // catch where they came from before redirected to login
  const from = location.state?.from?.pathname || "/"

  const usernameRef = useRef(); // use it to set focus on username field
  
  const inititalDirtyFields = {
    username: false,
    password: false,
  }

  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, loginSchema, async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "/auth/login",
        {
          username: values.username,
          password: values.password,
        },
        { withCredentials: true } // to send along the cookie contains the refreshToken
      );
      // axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${res.data['accessToken']}`
      setAccessToken(res?.data?.accessToken);
      setCurrentUser(res?.data?.user)
      setIsLoggedIn(true);

      // navigate(from, { replace: true })
      navigate('/admin')
    

    } catch (err) {
      //console.log(err)
      const responseStatus = err?.response?.status;
      
      // handle error with no response
      if(responseStatus === 0){
        toast.error('Network Error');
      }
      // at this point, we know we have a response
      else if (responseStatus === 400) {
        toast.error(err.response?.data);
      }
      else if (responseStatus === 401) {
        toast.error(err.response?.data);
      }else {
        toast.error(err.status);
      }

    } finally{
      setIsSubmitting(false);
    }
  });

  useEffect(() => {
    // console.log(values)
    // console.log(errors)
  }, [values, errors])

  useEffect(() => {
    localStorage.setItem('persist', persist)
  }, [persist])

  const togglePersist = () => {
    setPersist(prev=> !prev);
  
  }


  // on loading, set focus on the username
  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, [])


  


  return (
    <div className='flex items-center h-screen w-full justify-center flex-col'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />

      <div className='sm:w-full md:w-full lg:w-1/2 xl:w-1/4 md:m-0 m-4 p-5 bg-white rounded-xl mb-3 shadow dark:bg-secondary-dark-bg dark:text-neutral-200' >
        <p className='login-header w-full dark:text-neutral-200'>
          Login
        </p>
        <form onSubmit={handleSubmit}>
          
          <Input
            name="username"
            label="Username"
            type="username"
            error={errors.username}
            onChange={handleChange}
            autoFocus
          />

          <Input
            name="password"
            label="Password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            autoFocus
          />

          
          <LoadingButton 
            onClick={ (e) => {} }
            className='btn btn-primary btn-lg btn-block'
            disabledOnLoading={true}
            disabled={!isValid}
            loading={isSubmitting}
          >
            Sign In  
          </LoadingButton>

          <CheckboxContainer>
            <Checkbox 
              type='checkbox' 
              id='persist'
              onChange={togglePersist}
              checked={persist}
            />
            <label htmlFor='persist'>Trust This Devise</label>
          </CheckboxContainer>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
