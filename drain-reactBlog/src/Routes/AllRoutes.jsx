import React from 'react';
import {Routes,Route} from "react-router-dom"
import Page1 from '../pages/page1/page1';

import NewNavbar from '../components/NewNavbar';

import Page2 from '../pages/page2/page2';



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path="/cohort" element={<Page2/>}/>
    </Routes>

  )
}

export default AllRoutes