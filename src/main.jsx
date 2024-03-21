import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
// this is for dynamic 
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY4MDFhNjJmM2IxMTMyMDFlNzFkNjIiLCJpYXQiOjE3MTA4ODcyOTAsImV4cCI6MTcxODY2MzI5MH0.1SD1GpNFe1XvOYxK6UKtGFgpD2xJ2a4Cz7HcdTvFnwo';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
