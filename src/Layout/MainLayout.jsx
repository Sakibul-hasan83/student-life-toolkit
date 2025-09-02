import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Elements/Navbar';

const MainLayout = () => {
  return (
    <div className='min-w-7x mx-auto '>
      
          <Navbar></Navbar>
          <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
