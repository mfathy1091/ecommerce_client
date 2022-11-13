import React, {useState} from 'react'
import './input.css'
import { validateInput } from '../../utils/validator';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';

const InputSelect = ({ id, name, error,value, defaultValue, options, label, validators, type='text', onChange, className }) => {
  
  // const [error, setError] = useState(false);

  const handleChange = (e) => {
      // const {value} = e.target;
      // setError(validateInput(validators, value));
      onChange(e);
  };

  return (
    <div className='form-group'>
      {/* <label htmlFor={id} className='my-label'>{label}</label> */}
      <select
        // placeholder='placeholder'
        // noValidate
        id={id}
        // type={type} 
        name={name} 
        value={value} 
        onChange={ (e) => onChange(e) } 
        className='form-control'
        // defaultValue={0}
        // onBlur={onBlur}
      >
        <option value={0}>{label}</option>
        {options.length > 0 &&
          options?.map( (option, i) => (
            <option value={option?.value} key={i}>{option?.label}</option>
          ))
        }

      </select>
      <span className='form-label'>{label}</span>
      <span className={error ? "flex items-center instructions" : "flex items-center offscreen"}>
        <FaInfoCircle /> {error}
      </span>
    </div>
  )
}

export default InputSelect