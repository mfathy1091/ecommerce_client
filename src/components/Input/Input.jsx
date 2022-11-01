import React, {useState} from 'react'
import './input.css'
import { validateInput } from '../../utils/validator';
import { FaInfoCircle } from 'react-icons/fa';


const Input = ({ id, name, error,value, label, validators, type='text', onChange, className }) => {
  
  // const [error, setError] = useState(false);


  const handleChange = (e) => {
      // const {value} = e.target;
      // setError(validateInput(validators, value));
      onChange(e);
  };

  return (
    <div className='form-group'>
      {/* <label htmlFor={id} className='my-label'>{label}</label> */}
      <input
        placeholder='placeholder'
        noValidate
        aria-invalid={error ? "true" : "false"}
        id={id}
        type={type} 
        name={name} 
        value={value} 
        onChange={ (e) => onChange(e) } 
        className='form-control'
        // onBlur={onBlur}
      />
      <span className='form-label'>{label}</span>
      <span className={error ? "flex items-center instructions" : "flex items-center offscreen"}>
        <FaInfoCircle /> {error}
      </span>
    </div>
  )
}

export default Input