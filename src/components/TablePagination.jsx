import React from 'react'
import './tablePagination.css'
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from 'react-icons/md'

const TablePagination = (props) => {
  const { totalRows, page, rowsPerPage, onPageChange, onRowsPerPageChange } = props;

  const pageNumbers = [];
  const totalPages = Math.ceil(totalRows / rowsPerPage );
  const startIndex = ((page - 1) * rowsPerPage) + 1;
  const endIndex = page * rowsPerPage;

  if(page === totalPages){

  }
  for(let i=1; i <= totalPages; i++){
    pageNumbers.push(i);
  }

  const handleChangeRowsPerPage = (e) =>{
    onRowsPerPageChange(e.target.value)
  }

  const handleBeforeClick = (e) =>{
    if(page > 1){
      onPageChange(page-1)
    }
  }

  const handleNextClick = (e) =>{
    if(page < totalPages){
      onPageChange(page+1)
    }
  }

  return (
    <div className='pagination-bar'>
        <span className='select-limit-label'>Rows per page:</span>
        
        <select onChange={handleChangeRowsPerPage} className="select-limit">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span className='displayed-rows'>
          {startIndex}-{endIndex >= totalRows ? totalRows : endIndex} of {totalRows}
        </span>
        <div className='pagination-actions'>
          <button 
            className={page===1 ? 'pagination-button disabled' : 'pagination-button'} 
            onClick={handleBeforeClick}
          >
            <MdOutlineNavigateBefore />
          </button>
          <button 
            className={page===totalPages ? 'pagination-button disabled' : 'pagination-button'} 
            onClick={handleNextClick}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>

      </div>
  )
}

export default TablePagination