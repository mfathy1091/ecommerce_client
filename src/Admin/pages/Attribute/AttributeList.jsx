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

const AttributeList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();

  const [attributes, setAttributes] = useState([]);



  useEffect(() => {
    const getAttributes = async () => {
      try {
        const res = await axiosPrivate.get('attributes');
        let rawAttributes = res.data.map((attribute) => {
          return {     
            ...attribute,
            values: attribute.values.reduce((acc, val)=> {
              return [...acc, val.name]
            }, []).join(' | ')
          }
        });
        console.log(rawAttributes)
        setAttributes(rawAttributes);
      } catch (err) {
        console.log(err);
      }
    }

    getAttributes()
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
    { 
      headerLabel: 'Values', 
      value: 'values',
    },
  ]
    
  return (
    <div>
      

      <HeaderContainer>
        <PageHeader category="" title="Attributes" />
        <Button 
          onClick={() => {navigate('/admin/attribute/create')}}
          className='btn btn-primary btn-md'
        >
          Add
        </Button>

      </HeaderContainer>


      <Table 
        columns={columns}
        rows={attributes}
        path='/admin/attribute'
        hoverable={true}
      />


    </div>
  );
};

export default AttributeList;