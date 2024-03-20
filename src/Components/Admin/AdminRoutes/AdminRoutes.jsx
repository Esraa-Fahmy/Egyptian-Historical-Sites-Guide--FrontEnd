// AdminRoutes.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import AdminCategories from '../AdminPages/AdminCategories';
import SubCategories from '../AdminPages/SubCategories';
import Sites from '../AdminPages/Sites';
import UserComponent from '../AdminPages/UserComponent';
import UserReview from '../AdminPages/UserReview';

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminCategories />} />
        <Route path="/categories" element={<AdminCategories />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/users" element={<UserComponent />} />
        <Route path='/userreview' element={<UserReview/>}/>
      </Routes>
      </>
  );
}

export default AdminRoutes;
