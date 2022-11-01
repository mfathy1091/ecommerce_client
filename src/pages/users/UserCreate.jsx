import { useState, useEffect, useRef } from 'react';
import Container from '../../components/Container/Container';
import { Header } from '../../components';
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useMainContext } from "../../contexts/MainProvider"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { Validators, validate2 } from '../../utils/validator';
import { validate } from "../../utils/validate";
import useForm from '../../hooks/useForm';
import { axiosPrivate } from '../../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';

const UserCreate = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const isEditMode = params.userId ? true : false;
  console.log('User ID')

  const fields = [
    'fullName',
    'email',
    'password',
    'telephone',
  ];

  const { isIntakeOpened, isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();
  
  const initialValues = { username: '', fullName: '', email: '', password: '', confirmPassword: '' }
  
  const submit = () => {
    console.log('submitted!')
  }

  const { values, setValues, errors, handleChange, handleSubmit } = useForm(submit, validate, fields, initialValues);

  const getUser = async () => {
    try {
      const res = await axiosPrivate.get(
        `/users/${params.userId}`, 
      );

      setValues({
        ...values,
        username: res.data.username,
        fullName : res.data.full_name,
        email: res.data.email,
      })

    } catch (err) {
      console.log(err);
      // if 403 (expired refreshToken)
      // navigate('/login', { state: { from: location }, replace: true })
    }
  }

  useEffect(() => {
    if(isEditMode) {
      getUser();
      
    }
    
  }, [])

    // if(name == 'password' || name == 'confirmPassword'){
      //isMachedPasswords();
    // }


  // const isMachedPasswords = () => {
  //   if (values.password === values.confirmPassword) {
  //     setErrors({
  //       ...errors,
  //       confirmPassword: null
  //     })
      
  //     //console.log(errors);
  //   }else {
  //     setErrors({
  //       ...errors,
  //       confirmPassword: { error: true, message: 'please enter a valid email'}
  //     })
      
  //   }
    
  // }











  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // const [pwd, setPwd] = useState('');
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  // const [matchPwd, setMatchPwd] = useState('');
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);







  // empty out any displayed error when typing on username or passowrd fields
  // useEffect(() => {
  //     setErrMsg('');
  // }, [user, pwd, matchPwd])



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    // if button enabled with JS hack
    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //     setErrMsg("Invalid Entry");
    //     return;
    // }
    // try{
    //   setIsLoading(true);

      // const res = await api.post('/register', 
      // JSON.stringify({ username: user, password: pwd, confirmPassword: matchPwd}),{
      //   withCredentials: true
      // });
  //     toast.success('Craeted successfully!')

  //   }catch(err) {
  //     toast.error(err.message)
  //     console.log(err);
  //     // if(!err?.response) {
  //     //   toast.error(err.message)
  //     // }
  //   }finally{
  //     setIsLoading(false);
  //   }
    
  // }

  


  

  return (
    <section>
      {/* <p 
        ref={errRef} 
        className={errMsg ? "err-msg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p> */}
      <Header category="Users" title={`${isEditMode ? 'Edit User' : 'Create User'}`} />
      <Container>
        <form onSubmit={handleSubmit} noValidate>

        <div className='my-form-group'>
            <label htmlFor='username' className='my-label'>UserName:</label>
            <input
              label='UserName'
              name='username'
              value={values.username}
              type='text'
              onChange={handleChange}
              className={`my-input ${errors?.username ? 'input-error' : ''}`}
            />
            <span className={errors?.username ? "flex items-center instructions" : "flex items-center offscreen"}>
              <FaInfoCircle />
              {errors?.username}
            </span>
          </div>


        <div className='my-form-group'>
            <label htmlFor='fullName' className='my-label'>Full Name:</label>
            <input
              label='Full Name'
              name='fullName'
              value={values.fullName}
              type='text'
              onChange={handleChange}
              className={`my-input ${errors?.fullName ? 'input-error' : ''}`}
            />
            <span className={errors?.fullName ? "flex items-center instructions" : "flex items-center offscreen"}>
              <FaInfoCircle />
              {errors?.fullName}
            </span>
          </div>

          <div className='my-form-group'>
            <label htmlFor='email' className='my-label'>Email:</label>
            <input
              label='Email'
              name='email'
              value={values.email}
              type='text'
              onChange={handleChange}
              className={`my-input ${errors?.email ? 'input-error' : ''}`}
            />
            <span className={errors?.email ? "flex items-center instructions" : "flex items-center offscreen"}>
              <FaInfoCircle />
              {errors?.email}
            </span>
          </div>

          {
            isEditMode ? '' : 
            <>
              <div className='my-form-group'>
              <label htmlFor='password' className='my-label'>
                Password:
                <FaCheck className={!errors?.password ? "valid" : "hide"} />
                <FaTimes className={!errors?.password ? "hide" : "invalid"} />
              </label>
              <input
                label='Password'
                name='password'
                value={values.password}
                type='text'
                onChange={handleChange}
                className='my-input'
              />
              <span className={errors?.password ? "flex items-center instructions" : "flex items-center offscreen"}>
                <FaInfoCircle />
                {errors?.password}
              </span>
            </div>


            <div className='my-form-group'>
              <label htmlFor='confirmPassword' className='my-label'>
                Confirm Password:
                <FaCheck className={!errors?.confirmPassword ? "valid" : "hide"} />
                <FaTimes className={!errors?.confirmPassword ? "hide" : "invalid"} />
              </label>
              <input
                label='Password'
                name='confirmPassword'
                value={values.confirmPassword}
                type='text'
                onChange={handleChange}
                className='my-input'
              />
              <span className={errors?.confirmPassword ? "flex items-center instructions" : "flex items-center offscreen"}>
                <FaInfoCircle />
                {errors?.confirmPassword}
              </span>
            </div>
            </>
          }
          


          {/* <div className='my-form-group'>
            <label htmlFor="confirm_pwd" className='my-label'>
                Confirm Password
                <FaCheck className={validMatch && matchPwd ? "valid" : "hide"} />
                <FaTimes className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
              className='my-input'
              placeholder='Confirm Password'
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FaInfoCircle />
                Must match the first password input field.
            </p>
          </div> */}


          <Button 
            onClick={() => {navigate('/admin/users/create')}}
            className='btn btn-primary btn-md'
            // disabled={!validName || !validPwd || !validMatch ? true : false}
          >
            Create
          </Button>
        </form>
      </Container>
    </section>
    
      
  );
};

export default UserCreate;
