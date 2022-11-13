import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Container, Button, Input, Table, PageHeader } from '../../components';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CategoryList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();

  const [categories, setCategories] = useState([]);



  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axiosPrivate.get('categories');

        console.log(res.data)
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getCategories()
	}, [])



  const columns = [
    { 
      headerLabel: 'Name', 
      value: 'name',
    },
    { 
      headerLabel: 'Slug', 
      value: 'slug',
      path: true
    },
  ]
    
  return (
    <div>
      

      <HeaderContainer>
        <PageHeader category="" title="Categories" />
        <Button 
          onClick={() => {navigate('/admin/category/create')}}
          className='btn btn-primary btn-md'
        >
          Add
        </Button>

      </HeaderContainer>


      <Table 
        columns={columns}
        rows={categories}
        path='/admin/category'
        hoverable={true}
      />


    </div>
  );
};

export default CategoryList;