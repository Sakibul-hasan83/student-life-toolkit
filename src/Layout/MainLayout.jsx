import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Elements/Navbar';
import Footer from '../Elements/Footer';

const MainLayout = () => {
  return (
    <div className=' flex flex-col min-h-screen min-w-7x mx-auto '>
      
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  );
}

export default MainLayout;
