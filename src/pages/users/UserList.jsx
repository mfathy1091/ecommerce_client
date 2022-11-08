import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header, Input } from '../../components';
import Container from '../../components/Container/Container';
import { toast } from 'react-toastify';
import DataTable from '../../components/DataTable/DataTable';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Button from '../../components/Button/Button';

const UserList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();
const location = useLocation();

  const [totalRows, setTotalRows] = useState(100);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState('')


  const handleChangePage = (page) => {
    setPage(page);
  }

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  }

  const timeout = useRef()

  const debounceUsers = (isMounted, controller, delay = 1000) => { // handleDebounceSearch = (callback, delay = 1000)
    //Clear the previous timeout.
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      getUsers(isMounted, controller) // callback(...args)
    }, delay)
  }


  const getUsers = async (isMounted, controller) => {
    // Add validation

    try {
      const res = await axiosPrivate.get(
        `/users?searchKeyword=${searchKeyword}&page=${page}&limit=${rowsPerPage}`, 
        {
          signal: controller.signal // this allows us to cancel the request
        }
      );
      isMounted && setUsers(res.data.users);
      isMounted && setTotalRows(res.data.totalRows);
    } catch (err) {
      console.log(err);
      // if 403 (expired refreshToken)
      if(err.response.status === 401){
        navigate('/login', { state: { from: location }, replace: true })
      }
    }
  }


  
  useEffect(() => {
    // to cancel all pending requests if the component unmount
    let isMounted = true;
    const controller = new AbortController();

		debounceUsers(isMounted, controller)

    // cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    }
	}, [searchKeyword, page, rowsPerPage])


  const columns = [
    { headerLabel: 'Full Name', value: 'full_name'},
  ]
    
  return (
    <div>
      <Header category="Page" title="Users" />
      <Container>
        <div className='card-header flex justify-between mb-5'>
          <p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
            Users
          </p>

          <Button 
            onClick={() => {navigate('/users/create')}}
            className='btn btn-primary btn-md'
          >
            Add
          </Button>
        </div>

        <div>
          <Input 
            type="text" 
            label='Search'
            onChange={ e => setSearchKeyword(e.target.value) }
          />
        </div>

        <DataTable 
          columns={columns}
          rows={users}
          path='/admin/users'
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

export default UserList;