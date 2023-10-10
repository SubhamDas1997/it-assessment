import React from 'react'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'

import './index.css'

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className="headerIcon">
        <DocumentScannerIcon />
      </div>
      
      <h1>Document Manager</h1>
    </div>
  )
}

export default Header