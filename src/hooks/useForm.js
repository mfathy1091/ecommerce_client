import React, { useState, useEffect } from 'react'



// import {omit} from 'lodash'
// import { Validators, validate2 } from '../utils/validator';

const useForm = (inititalDirtyFields, schema, callback) => {
    
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [dirtyFields, setDirtyFields] = useState(inititalDirtyFields);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValid, setIsValid] = useState(true);

  const init = () =>{

  }

  const validateAll = async (values) => {
    const updatedErrors = {}
    schema.validate(values, {abortEarly: false})
    .catch(err => {
      err.inner.forEach((x) => {
        if (x.path !== undefined) {
          updatedErrors[x.path] = x.errors[0];
        } 
      });

    })
    .finally( () => {
      setErrors(updatedErrors)
      // console.log(updatedErrors)
    });
  }

  const validateOne = async (values, dirtyFields) => {
    const updatedErrors = {}
    schema.validate(values, {abortEarly: false})
    .catch(err => {
      err.inner.forEach((x) => {
        if (x.path !== undefined && dirtyFields[x.path] == true) {
          updatedErrors[x.path] = x.errors[0];
        } 
      });

    })
    .finally( () => {
      setErrors(updatedErrors)
      // console.log(updatedErrors)
    });
    return 
  }

  //A method to handle form inputs
    const handleChange = async (e) => {
        //To stop default events    
        // errors.persist();
        
        const { name, value } = e.target;

        const updatedValues = {
          ...values,
          [name]: value,
        }
        // console.log(updatedValues);
        
        setValues(updatedValues);
        setIsValid(await schema.isValid(updatedValues));
        
        const updatedDirtyFields = {
          ...dirtyFields,
          [name]: true
        }

        setDirtyFields(updatedDirtyFields)
        validateOne(updatedValues, updatedDirtyFields);
        
        // const error = validateOne(updatedValues, updatedDirtyFields);
        // const updatedErrors = {
        //   ...errors,
        //   [name]: error,
        // }
        
        // setErrors(updatedErrors);
        
        
        // schema.validate(updatedValues, {abortEarly: false})
        // .catch(err => {
        //   err.inner.forEach((x) => {
        //     if (x.path !== undefined) {
        //       updatedErrors[x.path] = x.errors[0];
        //     } 
        //   });

        // })
        // .finally( () => {
        //   setErrors(updatedErrors)
        // });

        // schema.validate(updatedValues, {abortEarly: false})
        // .catch(err => {
        //   console.log(err.errors);
        //   //this.showToast('top-right', 'danger', JSON.stringify(err.errors))
        // })


        // let validators = [];
        // if(name == 'email'){
        //   validators = [{check: Validators.required}, {check: Validators.email}];
        // }
        // if (name == 'password') {
        //   validators = [{check: Validators.required}, {check: Validators.password}];
        // }
    
    
        // const error = validate2(validators, value);
        // if (error) {
        //   setErrors({
        //     ...errors,
        //     [name]: error
        //   })
        // }else {
        //   setErrors({
        //     ...errors,
        //     [name]: null
        //   })
        // }

    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(values)

      validateAll(values);

      const updatedIsValid = await schema.isValid(values);
      setIsValid(updatedIsValid);

      if (updatedIsValid){
        callback(e);
      }
    };

    // useEffect(() => {
    //   if (Object.keys(errors).length === 0 && isSubmitting) {
    //     callback();
    //   }
    // }, [errors]);

    return {
        values,
        setValues,
        errors,
        dirtyFields,
        handleChange,
        handleSubmit,
        isValid
    }
}

export default useForm;