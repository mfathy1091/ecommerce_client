import React from 'react'
import './pagination.css'

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  // const { currentPage, maxPageLimit, minPageLimit} = props;
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage );

  for(let i=1; i <= totalPages; i++){
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) =>{
    paginate(pageNumber)
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(pageNumber => (
          <li
            key={pageNumber} 
            className={currentPage===pageNumber ? 'page-item active' : 'page-item'}
          >
            <a onClick={handlePageClick(pageNumber)} href="!#" className='page-link'>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination