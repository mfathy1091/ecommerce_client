import React from 'react'
import PageHeader from '../../components/PageHeader'
import { FiUsers } from 'react-icons/fi'; 
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div>
      <PageHeader category="beneficiaries" title="Dashboard" />
			<div className='mx-4 flex'>
        <NavLink className="dashboard-button" to="/beneficiaries">
          <FiUsers className='dashboard-button-icon'/>
          <span className='dashboard-button-text'>Beneficiaries</span>
        </NavLink>
      </div>

      <hr className='mx-4'/>

      <div>
        <p className="text-gray-900 ml-4 mt-4 uppercase dark:text-gray-500">PSS</p>
        <div className='mx-4 flex'>
          <NavLink className="dashboard-button" to="/ps-cases">
            <FiUsers className='dashboard-button-icon'/>
            <span className='dashboard-button-text'>PS Cases</span>
          </NavLink>

          <NavLink className="dashboard-button" to="/beneficiaries">
            <FiUsers className='dashboard-button-icon'/>
            <span className='dashboard-button-text'>PS Statistics</span>
          </NavLink>
        </div>
      </div>

      <hr className='mx-4'/>

      <div>
        <p className="text-gray-900 ml-4 mt-4 uppercase dark:text-gray-500">Housing</p>

        <div className='mx-4 flex'>
          <NavLink className="dashboard-button" to="/beneficiaries">
            <FiUsers className='dashboard-button-icon'/>
            <span className='dashboard-button-text'>Beneficiaries</span>
          </NavLink>

          <NavLink className="dashboard-button" to="/beneficiaries">
            <FiUsers className='dashboard-button-icon'/>
            <span className='dashboard-button-text'>Beneficiaries</span>
          </NavLink>
        </div>
      </div>

    </div>

    
  )
}

export default Dashboard