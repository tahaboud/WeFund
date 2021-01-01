import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content/ParentLayout';
import Footer from './components/Footer';
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


