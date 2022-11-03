import { useNavigate } from "react-router-dom"
import { Container, Input, LoadingButton } from "../../components"
import { useState } from "react"
import { Header } from "../../components"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { productSchema } from "../../validations/productSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const ProductCreate = () => {
  const { isIntakeOpened, isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();
  const [ isSubmitting, setIsSubmitting ] = useState(false); 
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  
  const inititalDirtyFields = {
    productName: false,
    price: false,
  }



  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, productSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await axiosPrivate.post('/products', {
        productName: values.productName,
        price: values.price,
      });
      
      toast.success('Created!')
      navigate('/products')

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

  
  return (
    <div>
      <Header category="Beneficiaries" title="Create Beneficiary" />
      <Container>
      <form onSubmit={handleSubmit}>
      <Input 
          name="productName" 
          label="Product Name" 
          type='text' 
          placeholder="Product Name" value={values.productName} 
          onChange={handleChange} 
          // pattern="^"
          required={true}
          error={errors.productName}
        />
        <Input 
          name="price" 
          label="Price" 
          type='number' 
          placeholder="Price" value={values.price} 
          onChange={handleChange}
          required={true}
          error={errors.price}
        />

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
        

      </Container>
    </div>
  )
}

export default ProductCreate