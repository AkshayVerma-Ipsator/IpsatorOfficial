import React from 'react';
import {Routes,Route} from "react-router-dom"
import Page1 from '../pages/page1/page1';
import NewNavbar from '../components/NewNavbar';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/nav' element={<NewNavbar/>}/>
    </Routes>

  )
}

export default AllRoutes