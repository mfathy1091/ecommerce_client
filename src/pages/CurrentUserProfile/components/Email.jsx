import { BiPencil } from 'react-icons/bi';
import useAuth from '../../../hooks/useAuth';
import { useState, useRef } from 'react';
import { axiosPrivate } from '../../../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Email = () => {
  const { currentUser, setCurrentUser } = useAuth();
  
  const emailRef = useRef();
  const [email, setEmail] = useState(currentUser.email);
  const [validEmail, setValidEmail] = useState('');
  const [editMode, seteditMode] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleClick = (e) => {

    if(editMode === true) {
      seteditMode(false)
      emailRef.current.focus()
    }else{
      seteditMode(true)
      emailRef.current.blur()
    }
      

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axiosPrivate.patch("/users", { email: email } );
      setCurrentUser(prev => {
        
        return {
          ...prev, 
          email: res.data.email
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


  return (
    <div class="row">
      <div class="col">
        <label className='form-label'>Email</label>
      </div>
      <div class="col">
        <input
          type="text"
          id="username"
          placeholder='Username'
          ref={emailRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="uidnote"
          // onFocus={ () => setEmailFocus(true) }
          // onBlur={() => setUserFocus(false)}
          className="my-form-control"
          disabled={!editMode}
        />
      </div>
      <div class="col">

      <button className={ editMode ? 'save-button' : 'edit-button' } onClick={ handleClick }>
        {editMode ? 'Save' : <BiPencil /> }
      </button>
        
      </div>
  </div>
  )
}

export default Email