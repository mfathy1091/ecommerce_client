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

const RoleList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();

  const [roles, setRoles] = useState([]);



  useEffect(() => {
    const getRoles = async () => {
      try {
        const res = await axiosPrivate.get('roles');
        setRoles(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getRoles()
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
        <PageHeader category="" title="Roles" />
        <Button 
          onClick={() => {navigate('/admin/role/create')}}
          className='btn btn-primary btn-md'
        >
          Add
        </Button>

      </HeaderContainer>


      <Table 
        columns={columns}
        rows={roles}
        path='/admin/role'
        hoverable={true}
      />


    </div>
  );
};

export default RoleList;
