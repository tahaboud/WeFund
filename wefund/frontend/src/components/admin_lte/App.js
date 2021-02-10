import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content/ParentLayout';
import Footer from './Footer';
//all include css and js for the admin lte

<<<<<<< HEAD
import "./dist/css/adminlte.min.css";
=======
import "./assets/css/adminlte.min.css";
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
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


