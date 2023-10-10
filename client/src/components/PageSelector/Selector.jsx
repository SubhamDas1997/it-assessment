import React from 'react'

import Pagination from '@mui/material/Pagination';

import './index.css'

const PageSelector = ({ totalPages, setCurrentPage }) => {

  const handleOnChange = (event, value) => {
    setCurrentPage(value)
  }

  return (
    <div className='pageSelectors'>
        
      <Pagination count={totalPages} variant="outlined" shape="rounded" color="primary" showFirstButton showLastButton onChange={handleOnChange}/>
      
    </div>
  )
}

export default PageSelector