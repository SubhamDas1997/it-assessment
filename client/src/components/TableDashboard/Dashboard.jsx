import React, { useEffect, useState } from 'react'

import Searchbar from '../SearchBar/Search'
import TableContents from '../TableContents/Contents'
import ListIcon from '@mui/icons-material/List'

import './index.css'

const Table = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue])

  return (
    <div>  
      <div className='infoText'>
          <div className='textWrapper'>
            <ListIcon className='listIcon'/>
            <span>Document Status Overview</span>
          </div>

          <div className='searbarWrapper'>
            <Searchbar setSearchValue={setSearchValue}/>
          </div>
      </div>

      <TableContents searchValue={debouncedSearchValue} />
    </div>
  )
}

export default Table