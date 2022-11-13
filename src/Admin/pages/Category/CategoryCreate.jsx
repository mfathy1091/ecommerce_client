import { useNavigate, useParams } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
// import useAxiosFunction from '../../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
import { useMainContext } from "../../contexts/MainProvider"
import { categorySchema } from "../../validations/categorySchema";
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
  parentCategoryId: false,
  name: false,
  slug: false,
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const FormInput = styled.div`
  width: 50%;
`

const CategoryEdit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  const inputFileRef = useRef(null);
  const [category, setCategory] = useState();
  const { categoryId } = useParams();
  const [uploading, setUploading] = useState(false);
  const [parentCategories, setParentCategories] = useState({});

  const uploadImage = async (file) => {
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


  const { values, setValues, errors, isValid, handleChange, handleSubmit } = useForm(inititalDirtyFields, categorySchema, async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      let data = {
        // parentCategoryId: values.parentCategoryId,
        name: values.name,
        slug: values.slug,
        // image: values.image,
      }
      
      let res
      
      if (categoryId) {
        res = await axiosPrivate.put('/categories/'+categoryId, data);
        toast.success('Updated!')
      } else {
        res = await axiosPrivate.post('/categories/', data);
        toast.success('Created!')
        navigate('/admin/category/list')
      }

    } catch (err) {

    } finally {
      setIsSubmitting(false);
    }

  });


  useEffect( () => {
    const getCategories = async () => {
      try {
        const res = await axiosPrivate.get('/categories/');
        const mappedData = res.data.map((parentCategory) => {
          return { value: parentCategory.id, label: parentCategory.name }
        })
        setParentCategories(mappedData)
      } catch (error) {
        console.log(error)
      }
    }

    const getCategory = async () => {
      try {
        const res = await axiosPrivate.get('/categories/'+categoryId);
        setCategory(res.data)
        setValues(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories();
    if(categoryId) getCategory();
  }, [])

  const handleImageChange = async (e) => {
    const image = await uploadImage(e.target.files[0]);
  }

  
  console.log(errors);
  
  return (
    <div>
      <HeaderContainer>
        <PageHeader category="Categories" title={categoryId ? 'Update Category' : 'Ceate Category'} />
      </HeaderContainer>
      
      <form onSubmit={handleSubmit}>
        <FormContainer>

          <FormInput>
            <InputSelect 
              onChange={handleChange}
              name='parentCategoryId'
              value={values.parentCategoryId}
              defaultValue={0}
              options={parentCategories}
              label='Select Parent Category'
              error={errors.parentCategoryId}
            />
          </FormInput>

          <FormInput>
            <Input
              name="name"
              label="Name"
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
              name="slug"
              label="Slug"
              type='text'
              placeholder="Slug"
              value={values.slug}
              onChange={handleChange}
              required={true}
              error={errors.slug}
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
          {categoryId ? 'Update' : 'Ceate'}
        </LoadingButton>
      </form>

    </div>
  )
}

export default CategoryEdit