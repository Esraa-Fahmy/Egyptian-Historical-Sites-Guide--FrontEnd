import React from 'react'
import TableCategories from '../TableCategories/TableCategories'
import SideBar from '../SideBar/SideBar'

function SubCategories() {
  return (
    <div className='d-flex'>
            <SideBar/>
        <TableCategories apiEndpoint="https://historical-sites.onrender.com/api/subCategories" />
  </div>
  )
}

export default SubCategories