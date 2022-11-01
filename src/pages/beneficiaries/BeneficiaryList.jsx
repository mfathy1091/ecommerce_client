import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../components';
import Table from '../../components/Table';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Container, Button, Input, DataTable } from '../../components';

const BeneficiaryList = () => {
const axiosPrivate = useAxiosPrivate();
const navigate = useNavigate();
const location = useLocation();

  const [totalRows, setTotalRows] = useState(100);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [beneficiaries, setBeneficiaries] = useState([]);

  const [stringToSearch, setStringToSearch] = useState('')


  const handleChangePage = (page) => {
    setPage(page);
  }

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  }

  const timeout = useRef()

  const debounceGetBeneficiaries = (isMounted, controller, delay = 1000) => { // handleDebounceSearch = (callback, delay = 1000)
    //Clear the previous timeout.
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      getBeneficiaries(isMounted, controller) // callback(...args)
    }, delay)
  }


  const getBeneficiaries = async (isMounted, controller) => {
    // Add validation

    try {
      const res = await axiosPrivate.get(
        `/beneficiaries?stringToSearch=${stringToSearch}&page=${page}&limit=${rowsPerPage}`, 
        {
          signal: controller.signal // this allows us to cancel the request
        }
      );
      isMounted && setBeneficiaries(res.data.beneficiaries);
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

		debounceGetBeneficiaries(isMounted, controller)

    // cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    }
	}, [stringToSearch, page, rowsPerPage])




  const beneficiariesGrid = [
    { 
      field: 'name',
      headerText: 'Name',
      width: '150',
      textAlign: 'Center' 
    },
		{ 
      field: 'file_id',
      headerText: 'File #',
      width: '150',
      textAlign: 'Center' 
    },
  ];

  const columns = [
    { headerText: 'Name', value: 'full_name'},
    { headerText: 'File #', value: 'file_number' },
    { headerText: 'Individual #', value: 'individual_number' },
    { headerText: 'Passport #', value: 'passport_number' },
  ]
    
  console.log(beneficiaries.filter(beneficiary=>beneficiary.full_name.toLowerCase().includes('z')))


  const handleClick = (e) => {
    e.preventDefault();
    console.log('button clicked')
  }

  return (
    <div>
      <Header category="Page" title="Beneficiaries" />
      <Container>
        <div className='card-header flex justify-between mb-5'>
          <p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
            Beneficiaries
          </p>


          <Button 
            onClick={() => {navigate('/beneficiaries/create')}}
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
          rows={beneficiaries}
          path='/beneficiaries'
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

export default BeneficiaryList;