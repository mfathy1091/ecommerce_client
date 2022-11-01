import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton } from "../../components"
import { useState } from "react"
import { Header } from "../../components"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { beneficiarySchema } from "../../validations/beneficiarySchema"
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const BeneficiaryCreate = () => {
  const { isIntakeOpened, isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()


  const { values, setValues, errors, dirtyFields, isValid, handleChange, handleSubmit } = useForm(beneficiarySchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/beneficiaries', {
        fullName: values.fullName,
        fileNumber: values.fileNumber,
        individualNumber: values.individualNumber,
        passportNumber: values.passportNumber,
      });
      
      toast.success('Created!')
      navigate('/beneficiaries')

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

    
    // await axiosFetch({
    //   axiosInstance: api,
    //   method: 'POST',
    //   url: '/beneficiaries',
    //   data: {
    //     fullName: values.fullName,
    //     fileNumber: values.fileNumber,
    //     individualNumber: values.individualNumber,
    //     passportNumber: values.passportNumber,
    //   },
    //   requestConfig: {

    //   }
    // })
  });

  
  return (
    <div>
      <Header category="Beneficiaries" title="Create Beneficiary" />
      <Container>
      <form onSubmit={handleSubmit}>
      <Input 
          name="fullName" label="Full Name" type='text' 
          placeholder="Full Name" value={values.fullName} 
          onChange={handleChange} 
          // pattern="^"
          required={true}
          error={errors.fullName}
        />
        <Input 
          name="fileNumber" label="File Number" type='text' 
          placeholder="File Number" value={values.fileNumber} 
          onChange={handleChange}
          required={true}
          error={errors.fileNumber}
        />
        <Input 
          name="individualNumber" label="Individual Number" type='text' 
          placeholder="Individual Number" value={values.individualNumber} 
          onChange={handleChange}
          required={true}
          error={errors.individualNumber}
        />
        <Input 
          name="passportNumber" label="Passport Number" type='text' 
          placeholder="Passport Number" value={values.passportNumber} 
          onChange={handleChange}
          required={true}
          error={errors.passportNumber}
        />

        <LoadingButton 
          onClick={ (e) => {} }
          className='btn btn-primary btn-md'
          disabledOnLoading={true}
          disabled={!isValid}
          loading={isSubmitting}
        >
          Login  
        </LoadingButton>
      </form>
        

      </Container>
    </div>
  )
}

export default BeneficiaryCreate