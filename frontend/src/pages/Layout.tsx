import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

// layout page get the links on top

const Layout = () => 
{
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;