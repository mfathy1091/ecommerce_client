import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../components';
import Table from '../../components/Table';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Container, Button, Input, DataTable } from '../../components';

const ProductList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();
const location = useLocation();

  const [totalRows, setTotalRows] = useState(100);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);

  const [stringToSearch, setStringToSearch] = useState('')


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
        `/products?stringToSearch=${stringToSearch}&page=${page}&limit=${rowsPerPage}`, 
        {
          signal: controller.signal // this allows us to cancel the request
        }
      );
      isMounted && setProducts(res.data.products);
      isMounted && setTotalRows(res.data.totalRows);
    } catch (err) {
      console.log(err);
      // if 401 (expired refreshToken)
      navigate('/login', { state: { from: location }, replace: true })
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
	}, [stringToSearch, page, rowsPerPage])


  const columns = [
    { headerText: 'Name', value: 'product_name'},
    { headerText: 'Price', value: 'price' },
  ]

  const handleClick = (e) => {
    e.preventDefault();
    console.log('button clicked')
  }

  return (
    <div>
      <Header category="Page" title="Products" />
      <Container>
        <div className='card-header flex justify-between mb-5'>
          <p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
            Products
          </p>


          <Button 
            onClick={() => {navigate('/products/create')}}
            className='btn btn-primary btn-md'
          >
            Add
          </Button>

        </div>

        <div>
          <Input 
            type="text" 
            label='Search'
            onChange={ e => setStringToSearch(e.target.value) }
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



      </Container>


    </div>
  );
};

export default ProductList;