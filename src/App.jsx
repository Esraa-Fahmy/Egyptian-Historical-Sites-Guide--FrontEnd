import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';
 import { BrowserRouter, Route,Routes } from 'react-router-dom'
 //import Footer from './Components/Footer/Footer';
 import Navbar from './Components/Navbar/Navbar';
 //import Layout from './Components/Layout/Layout';
 import Home from './Pages/Home/Home';
 import About from './Components/About/About';
 import Register from './Components/Register/Register';
 import Categories from './Components/Categories/Categories';
import Suggestions from './Components/Suggestions/Suggestions';
import Religious from './Pages/Religious/Religious';
import Medical from './Pages/Medical/Medical';
import Pharonic from './Pages/Pharonic/Pharonic';
import Recreational from './Pages/Recreational/Recreational';
import FindIn from './Components/FindIn/FindIn';
import Footer from './Components/Footer/Footer';
import NavbarComponent from './Components/Navbar/Navbar';
import NavBar from './Components/Navbar/Navbar';
// import NavBar from './Components/Navbar/Navbar';
// let routers = createBrowserRouter([
//   {path:'Layout',element:<Layout/>,children:[
//     {path:'home',element:<Home/>},
//     {path:'about',element:<About/>},
//     {path:'categories',element:<Categories/>}
//   ]}])
function App() {

  return (
    <>
    {/* <RouterProvider router={routers}></RouterProvider> */}
     
     {/* <Card/>
     <FindIn/>
     <Footer/> */}
     {/* <Layout/> */}
     
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/suggestions' element={<Suggestions/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/religious' element={<Religious/>}/>
          <Route path='/pharonic' element={<Pharonic/>}/>
          <Route path='/medical' element={<Medical/>}/>
          <Route path='/recreational' element={<Recreational/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
