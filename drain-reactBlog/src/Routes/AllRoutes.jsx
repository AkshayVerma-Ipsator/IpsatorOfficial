import React from 'react';
import {Routes,Route} from "react-router-dom"
import Page1 from '../pages/page1/page1';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Page1/>}/>

    </Routes>

  )
}

export default AllRoutes