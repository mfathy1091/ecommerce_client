import Container from "../../components/Container/Container"
import { useNavigate } from "react-router-dom"
import FormInput from "../../components/FormInput"
import { useState } from "react"
import { Header } from "../../components"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Button, Input } from '../../components';

const CreatePsIntake = () => {
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [values, setValues] = useState({
    referralSource: "",
    referralDate: "",
  });

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  

  const handleSubmit = async () => {
    try {
      const res = await axiosPrivate.post('/ps-cases', {
        referralDate: values.referralDate,
        referralSource: values.referralSource
      });
      navigate('/ps-cases');
      setIsLoading(true);
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  }
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChangeInput = (e) => {
    const inputField = e.target.name;
    console.log(e.target.value);
    const updatedFormData = {
      ...formData,
      [inputField]: e.target.value
    };
    setFormData(updatedFormData);
  }
  
  return (
    <form>
      <Header category="Beneficiaries" title="Create PS Intake" />
      <Container>

        <FormInput 
          name="referralSource" label="Referral Source" type='text' 
          placeholder="Referral Source" value={values.referralSource} 
          onChange={onChange} 
          // pattern="^"
          required={true}
          errorMessage="Full Name should be 3-16 characters and shouldn't include any special characters"
        />
        <FormInput 
          name="referralDate" label="Referral Date" type='date' 
          placeholder="Referral Date" value={values.referralDate} 
          onChange={onChange}
          required={true}
          errorMessage="File Number shoud be 8-20 characters and includes at least 1 letter, 1 number and 1 sepecial character"
        />

        <button 
          className='opacity-80 hover:opacity-100 bg-red-400 px-4 py-1.5 text-white rounded-md'
          onClick={handleSubmit}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>

      </Container>
    </form>
  )
}

export default CreatePsIntake