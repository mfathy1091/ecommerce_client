import React from 'react';
import { useEffect, useState, useRef } from 'react';
// import { customersData, customersGrid } from '../../data/dummy';
import { Header } from '../../../components';
import Container from '../../../components/Container/Container';
import DataTable from '../../../components/DataTable/DataTable';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useMainContext } from "../../../contexts/MainProvider"
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import Button from '../../../components/Button/Button';

const PsCaseList = () => {
  const { isIntakeOpened, isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();
  const axiosPrivate = useAxiosPrivate();

  const [totalRows, setTotalRows] = useState(100);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [psCases, setPsCases] = useState([]);

  const tabs = [
    {name: 'Active', status: 'active'},
    {name: 'Inactive', status: 'inactive'},
    {name: 'Closed', status: 'closed'},
    {name: 'Pending Assignment', status: 'pending-assignment'}
  ]
  const [tab, setTab] = useState(tabs[0]);


  const handleChangeTab = (tab) => {
    setTab(tab);
    
  }

  const handleChangePage = (page) => {
    setPage(page);
  }

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  }

  const navigate = useNavigate()


	useEffect(() => {
    getPsCases();
	}, [tab, page, rowsPerPage])

  const getPsCases = async () => {
    // Add validation
    console.log(tab)
    const res = await axiosPrivate.get(`/ps-cases?status=${tab.status}&page=${page}&limit=${rowsPerPage}`);
    setPsCases(res.data.psCases);
    setTotalRows(res.data.totalRows);
  }
  
  const psCasesGrid = [
    { 
      field: 'name',
      headerLabel: 'Name',
      width: '150',
      textAlign: 'Center' 
    },
		{ 
      field: 'file_id',
      headerLabel: 'File #',
      width: '150',
      textAlign: 'Center' 
    },
  ];

  const columns = [
    { headerLabel: 'Referral Source', value: 'referral_source'},
    { headerLabel: 'Referral Date', value: 'referral_date'},
    { headerLabel: 'Created By', value: 'created_by'},
    { headerLabel: 'Assigned To', value: 'assigned_to'},
    { headerLabel: 'Assigned By', value: 'assigned_by'},
  ]
    
  return (
    <div>
      <Header category="Page" title="Ps Cases" />
      <Container>
        <div className='card-header flex justify-between mb-5'>
          <p className='text-xl tracking-tight text-slate-900 dark:text-neutral-200'>
            Ps Cases
          </p>

          <Button 
            onClick={() => {navigate('/ps-cases/create')}}
            className='btn btn-primary btn-md'
          >
            Add
          </Button>
        </div>

        <Navbar 
          tabs = {tabs}
          currentTab = {tab}
          onChangeTab = {handleChangeTab}
        />
        
        <DataTable 
          columns={columns}
          rows={psCases}
          path='/ps-cases'
          totalRows={totalRows}
          page={page}
          rowsPerPage={rowsPerPage} 
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          hoverable={true}
        />

        {/* {isLoading && <p className='text-3xl'>LOADING ......</p>}
        
        {!isLoading && error && <p>{error}</p>}

        {!isLoading && !error && psCases?.length > 0 &&
          <Table 
            columns={columns}
            data={psCases}
            path='/ps-cases'
          />
        }

        {!isLoading && !error && psCases?.length === 0 &&
          <p>No data to display</p>
        } */}

      </Container>


    </div>
  );
};

export default PsCaseList;