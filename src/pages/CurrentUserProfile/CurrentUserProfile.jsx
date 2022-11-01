import './currentUserProfile.css'

import { useState, useEffect, useRef } from 'react';
import Container from '../../components/Container/Container';
import { Header } from '../../components';
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { useMainContext } from "../../contexts/MainProvider"
import Avatar from '../../components/Avatar/Avatar';
import { AiFillCamera } from "react-icons/ai";
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Email from './components/Email';
import { BiPencil } from 'react-icons/bi';

// 4 to 24 characters
// starts with lower or upper case letter then be followed by 
// 3 to 23 characters lower or upper case letters, digits, or underscore
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

// starts with at least 1 lowercase letter, 1 uppercase letter, 1 digit
// 1 specicial character 
// total 8 to 24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const CurrentUserProfileEdit = () => {
  const [editName, setEditName] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const { currentUser, setCurrentUser } = useAuth();
  const { isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();


  const userRef = useRef();
  const errRef = useRef();
  const inputFileRef = useRef(null);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  // empty out any displayed error when typing on username or passowrd fields
  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd])



  // const [values, setValues] = useState({
  //   username:"",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const onChange = (e) => {
  //   setValues({...values, [e.target.name]: e.target.value})
  // }

  const handleChangeAvatar = async (e) => {
    e.preventDefault();
    try {
      // get file
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("avatar", file);

      // upload to cloudinary
      const res = await axiosPrivate.post("/upload/avatar", formData, {
        onUploadProgress: (x) => {
          if (x.total < 1024000)
            return toast.info("Uploading", {
              className: "bg-upload",
              bodyClassName: "bg-upload",
              autoClose: 7000,
            });
        },
      });
      setCurrentUser(prev => {
        
        return {
          ...prev, 
          avatarUrl: res.data.avatarUrl
        }
      })
      console.log(res.data.url)
    } catch (err) {
      toast.error(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
    try{
      setIsLoading(true);

      const res = await axiosPrivate.put(`/users/${currentUser.id}`, 
      JSON.stringify({
        username: user,
        password: pwd, 
        confirmPassword: matchPwd,
        avatar_url: inputFileRef.url? inputFileRef: user.avatarUrl
      }),
      {
        withCredentials: true
      });
      toast.success('Craeted successfully!')

    }catch(err) {
      toast.error(err.message)
      console.log(err);
      // if(!err?.response) {
      //   toast.error(err.message)
      // }
    }finally{
      setIsLoading(false);
    }
    
  }

  const handleFileInput = () => {
    inputFileRef.current.click()
  }

  const handleChange = (e) => {
    inputFileRef.current.click()
  }



  return (
    <section>
      <p 
        ref={errRef} 
        className={errMsg ? "err-msg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <Header category="" title="My Account" />
      <Container>
        <div className='profile-avatar'>
          <div 
            className='profile-avatar-wrapper'
            onClick={handleFileInput}
            onChange={handleChangeAvatar}
          >
            <img
              src={currentUser.avatarUrl}
              alt='avatar-picture'
            />
            <AiFillCamera />
            <input
              type="file"
              id="avatar"
              ref={inputFileRef}
              className="profile-avatar-input"
            />
          </div>
        </div>


        <Email />

        <div class="row">
          <div class="col">
            <label className='form-label'>Email</label>
          </div>
          <div class="col">
            <span className='form-data'>{ currentUser.email }</span>
          </div>
          <div class="col">
            <BiPencil />
          </div>
        </div>

        <br /><br /><br /><br /><br /><br />

        <form onSubmit={handleSubmit}>


          <div className='my-form-group'>
            <label htmlFor="username" className='flex items-center align-center my-form-label'>
              Email
              {/* <FaCheck className={validName ? "valid" : "hide"} /> */}
              <FaTimes className={validName || !user ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="email"
              placeholder='Email'
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={currentUser.email}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="my-form-control"
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>

          <div className='my-form-group'>
            <label htmlFor="password" className='my-form-label'>
                Password
                <FaCheck className={validPwd ? "valid" : "hide"} />
                <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
                className='my-form-control'
                placeholder='Password'
                autoComplete='false'
                type="text"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
          </div>

          <div className='my-form-group'>
            <label htmlFor="confirm_pwd" className='my-form-label'>
                Confirm Password
                <FaCheck className={validMatch && matchPwd ? "valid" : "hide"} />
                <FaTimes className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
              className='my-form-control'
              placeholder='Confirm Password'
              type="text"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
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
          </div>

          <button
            className='my-btn-primary'
            disabled={!validName || !validPwd || !validMatch ? true : false}
          >
            Submit
          </button>
        </form>
      </Container>
    </section>
    
      
  );
};

export default CurrentUserProfileEdit;
