
import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div  >
      <aside className="sidebar" id="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
               <Link className="nav-link" to="/admin/categories">Categories</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/admin/subcategories">Subcategories</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/admin/sites">Sites</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/admin/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/userreview">UserReview</Link>
          </li>
        </ul>
      </aside>
      </div>
  );
}

export default SideBar;
