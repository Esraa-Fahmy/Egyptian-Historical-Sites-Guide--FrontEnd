import React from 'react'
import TableCategories from '../TableCategories/TableCategories'
import SideBar from '../SideBar/SideBar'
import TableSites from '../TableReviewsSpecificSite/TableReviewsSpecificSite'

function Sites() {
  return (
    <div className='d-flex'>
      <SideBar/>
       <TableCategories apiEndpoint="https://historical-sites.onrender.com/api/sites" />
    </div>
  )
}

export default Sites
