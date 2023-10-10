import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

import './index.css'

const Searchbar = ({ searchValue, setSearchValue }) => {
  const handleInputChange = (value) => {
    setSearchValue(value);
  }

  return (
    <div className='searchBarWrapper'>
      <SearchIcon />

      <input type='text' placeholder="Search by Country" onChange={(e) => handleInputChange(e.target.value)}/>
    </div>
  )
}

export default Searchbar