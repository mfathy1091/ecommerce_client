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

const BrandList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();

  const [brands, setBrands] = useState([]);



  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await axiosPrivate.get('brands');
        setBrands(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getBrands()
	}, [])



  const columns = [
    { 
      headerLabel: 'Name', 
      value: 'name',
    },

  ]
    
  return (
    <div>
      

      <HeaderContainer>
        <PageHeader category="" title="Brands" />
        <Button 
          onClick={() => {navigate('/admin/brand/create')}}
          className='btn btn-primary btn-md'
        >
          Add
        </Button>

      </HeaderContainer>


      <Table 
        columns={columns}
        rows={brands}
        path='/admin/brand'
        hoverable={true}
      />


    </div>
  );
};

export default BrandList;
