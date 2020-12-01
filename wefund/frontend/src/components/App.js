import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Nav from './Nav';
import Content from './content/Content';
import Footer from './Footer';
import './css/1.css' ;
import './css/bottom.css' ;
import './css/events.css' ;
import './css/evreg.css' ;
import './css/login.css' ;
import { Provider  } from "react-redux";
import store from "../store";
// Alert Options
class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Nav/>
                    <Footer />
                </Fragment>
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
