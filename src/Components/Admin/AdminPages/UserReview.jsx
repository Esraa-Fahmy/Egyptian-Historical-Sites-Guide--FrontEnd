import React from 'react'
import SideBar from '../SideBar/SideBar'
import TableReview from '../TableReview/TableReview'

function UserReview() {
  return (
    <div className='d-flex'>
      <SideBar/>
      <TableReview apiEndpoint="https://historical-sites.onrender.com/api/reviews"/>

    </div>
  )
}

export default UserReview
