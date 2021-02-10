import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content/ParentLayout';
import Footer from './Footer';
//all include css and js for the admin lte

import "./dist/css/adminlte.min.css";
import "./plugins/daterangepicker/daterangepicker.css";




export default function App() {
  return (
    <div>
        <Header/>
        <Menu/>
        <Content/>
        <Footer/>
    </div>
  );
}


