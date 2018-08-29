import React from 'react';

import AdminNavBar from './AdminNavBar/AdminNavBar'
import AdminSideBar from './AdminSideBar/AdminSideBar'

const adminBar = ({context}) => (
  <header>
    <AdminNavBar context={context}/>
    <AdminSideBar />
  </header>
);

export default adminBar;
