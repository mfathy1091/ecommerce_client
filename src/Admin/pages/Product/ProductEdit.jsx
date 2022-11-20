import { useNavigate, useParams } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { productSchema } from "../../validations/productSchema";
import useForm from "../../hooks/useForm"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styled from 'styled-components'
import { AiFillCamera } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { Container, Button, LoadingButton, Input, PageHeader } from '../../components';
import { FaInfoCircle } from 'react-icons/fa';
import InputSelect from "../../components/Input/InputSelect";
import Loader from "../../components/Loader/Loader";
// import ImageHolder from '../../../images/image-holder.jpg'
import ImageHolder from "./../../../assets/image-holder.jpg"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const SelectContainer = styled.select`
  padding: 5px;
  width: 100%;
  border: 1px  solid #efefef;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`

const TextArea = styled.textarea`
  
`
const ImageInput = styled.div`
  margin: 0 auto;
`
const ImagePreview = styled.div`
  width: 200px;
  height: 150px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3 ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`


const Image = styled.img`
  box-shadow: 1px 1px 15px -15px #000 !important;
  transition: all 0.3 ease;
  object-fit: contain;
  width: 100%;
  height: 100%;
`



const UploadIcon = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 10px auto;


  gap: 10px;
  & svg {
    height: 30px;
    width: 30px;
  }
`

const ImageBrowse = styled.div`
  display: flex;
  flex-direction: column;
`


const inititalDirtyFields = {
  brandId: false,
  categoryId: false,
  name: false,
  description: false,
  image: false
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const FormInput = styled.div`
  width: 50%;
`

const ProductEdit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  const inputFileRef = useRef(null);
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const [uploading, setUploading] = useState(false);
  const [brands, setBrands] = useState({});

  const uploadImageHandler = async (file) => {
    try {
      setUploading(true);
      let formData = new FormData();
      formData.append("avatar", file);

      // upload to cloudinary
      const res = await axiosPrivate.post("/upload/avatar", formData, {
        // onUploadProgress: (x) => {
        //   if (x.total < 1024000)
        //     return toast.info("Uploading", {
        //       className: "bg-upload",
        //       bodyClassName: "bg-upload",
        //       autoClose: 7000,
        //     });
        // },
      });

      console.log(res.data.url)
      setValues( prev => {
        return {
          ...prev,
          image: res.data.url
        }
      })
        

    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    } finally {
      setUploading(false);
    }
  };


  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, productSchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      let data = {
        brandId: values.brandId,
        categoryId: values.categoryId,
        name: values.name,
        description: values.description,
        image: values.image,
      }
      
      let res
      
      if (productId) {
        res = await axiosPrivate.put('/products/'+productId, data);
        toast.success('Updated!');
      } else {
        res = await axiosPrivate.post('/products/', data);
        toast.success('Created!');
        navigate('/admin/product/list')
      }

    } catch (err) {
      toast.error(err);
    } finally {
      setIsSubmitting(false);
    }

  });


  useEffect( () => {
    const getBrands = async () => {
      try {
        const res = await axiosPrivate.get('/brands/');
        const mappedData = res.data.map((brand) => {
          return { value: brand.id, label: brand.name }
        })
        setBrands(mappedData)
      } catch (error) {
        console.log(error)
      }
    }

    const getProduct = async () => {
      try {
        const res = await axiosPrivate.get('/products/'+productId);
        setProduct(res.data)
        setValues(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getBrands();
    if(productId) getProduct();
  }, [])

  const handleImageChange = async (e) => {
    const image = await uploadImageHandler(e.target.files[0]);
  }

  
  console.log(errors);
 
  return (
    <div>
      <HeaderContainer>
        <PageHeader category="Products" title={productId ? 'Update Product' : 'Ceate Product'} />
        {productId &&
          <Button 
            onClick={() => {navigate('/product/'+productId)}}
            className='btn btn-primary btn-md'
          >
            Show In Shop
          </Button>
        }

      </HeaderContainer>
      
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <ImageInput>
            <ImagePreview>
              <Image
              src={
                values.image
                ? values.image
                : ImageHolder
              } 
                alt="picture-placeholder"
              />
              {uploading ? <Loader color='000' /> : ''}
            </ImagePreview>
              <ImageBrowse>
                <UploadIcon htmlFor="file">
                  Image <MdDriveFolderUpload />
                </UploadIcon>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  ref={inputFileRef}
                  id='file'
                  onChange={handleImageChange}
                />
                <span className={errors.image ? "flex items-center instructions" : "flex items-center offscreen"}>
                  <FaInfoCircle /> {errors.image}
                </span>
              </ImageBrowse>
          </ImageInput>

          <FormInput>
            <InputSelect 
              onChange={handleChange}
              name='brandId'
              value={values.brandId}
              defaultValue={0}
              options={brands}
              label='Select Brand'
              error={errors.brandId}
            />
          </FormInput>

          <FormInput>
            <InputSelect 
              onChange={handleChange}
              name='categoryId'
              value={values.categoryId}
              defaultValue={0}
              label='Select Category'
              options={[
                {value: '2', label: 'Sunglasses'},
                {value: '3', label: 'Eyeglasses'},
                {value: '4', label: 'Accessories'},
              ]}
              error={errors.categoryId}
            />
          </FormInput>

          <FormInput>
            <Input
              name="name"
              label="Model Name"
              type='text'
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              // pattern="^"
              required={true}
              error={errors.name}
            />
          </FormInput>

          <FormInput>
            <Input
              name="description"
              label="Description"
              type='text'
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
              required={true}
              error={errors.description}
            />
          </FormInput>
        </FormContainer>



        <LoadingButton
          onClick={(e) => { }}
          className='btn btn-primary btn-md'
          disabledOnLoading={true}
          disabled={!isValid}
          loading={isSubmitting || uploading}
        >
          {productId ? 'Update' : 'Ceate'}
        </LoadingButton>
      </form>
    </div>
  )
}

export default ProductEdit