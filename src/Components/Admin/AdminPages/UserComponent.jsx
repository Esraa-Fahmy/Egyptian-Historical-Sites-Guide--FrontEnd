import React from 'react'
import SideBar from '../SideBar/SideBar'
import TableUser from '../AdminDashboard/TableUser/TableUser'

function UserComponent() {
  return (
    <div className='d-flex'>
      <SideBar/>
      <TableUser apiEndpoint={"https://historical-sites.onrender.com/api/users"}/>
     </div>
  )
}

export default UserComponent
