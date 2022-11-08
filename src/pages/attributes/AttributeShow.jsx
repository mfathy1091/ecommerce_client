import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Container, Button, Input, Table, Header } from '../../components';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AttributeValueCreate from './AttributeValueCreate';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CreateValueContainer = styled.div`
  
`;

const AttributeShow = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();
const { attributeId } = useParams();

  const [attribute, setAttribute] = useState([]);

  const getAttribute = async () => {
    try {
      const res = await axiosPrivate.get('attributes/'+attributeId);
      setAttribute(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    getAttribute()
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
      <Header>{attribute.name} - Values</Header>

      </HeaderContainer>


      <Table 
        columns={columns}
        rows={attribute.values}
        path='/attribute-values'
        hoverable={true}
      />

      <hr />
      <CreateValueContainer>
        <AttributeValueCreate attribute={attribute} callBack={getAttribute} />
      </CreateValueContainer>
      

    </div>
  );
};

export default AttributeShow;