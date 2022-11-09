import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import axios from '../../api/axios';
import { Container, Button, Input, DataTable, PageHeader } from '../../components';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();
const location = useLocation();

  const [totalRows, setTotalRows] = useState(100);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState('')


  const handleChangePage = (page) => {
    setPage(page);
  }

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  }

  const timeout = useRef()

  const debounceGetProducts = (isMounted, controller, delay = 1000) => { // handleDebounceSearch = (callback, delay = 1000)
    //Clear the previous timeout.
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      getProducts(isMounted, controller) // callback(...args)
    }, delay)
  }


  const getProducts = async (isMounted, controller) => {
    // Add validation

    try {
      const res = await axiosPrivate.get(
        `/products?searchKeyword=${searchKeyword}&page=${page}&limit=${rowsPerPage}`, 
        {
          signal: controller.signal // this allows us to cancel the request
        }
      );
      isMounted && setProducts(res.data.products);
      isMounted && setTotalRows(res.data.totalRows);
    } catch (err) {
      console.log(err);
      if(err.response.status===401){
        // navigate('/login', { state: { from: location }, replace: true })
      }      
    }


  }


  
  useEffect(() => {
    // to cancel all pending requests if the component unmount
    let isMounted = true;
    const controller = new AbortController();

		debounceGetProducts(isMounted, controller)

    // cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    }
	}, [searchKeyword, page, rowsPerPage])


  const columns = [
    { headerLabel: 'Name', value: 'name'},
  ]

  const handleClick = (e) => {
    e.preventDefault();
    console.log('button clicked')
  }


  return (
    <div>
      <HeaderContainer>
        <PageHeader category="" title="Products" />
        <Button 
          onClick={() => {navigate('/products/create')}}
          className='btn btn-primary btn-md'
        >
          Add
        </Button>
      </HeaderContainer>

      <div>
        <Input 
          type="text" 
          label='Search'
          onChange={ e => setSearchKeyword(e.target.value) }
        />
      </div>

      <DataTable 
        columns={columns}
        rows={products}
        path='/products'
        totalRows={totalRows}
        page={page}
        rowsPerPage={rowsPerPage} 
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        hoverable={true}
      />

    </div>
  );
};

export default ProductList;