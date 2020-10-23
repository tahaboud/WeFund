import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Nav from './Nav';
import Content from './content/Content';
import Footer from './Footer';


// Alert Options
class App extends React.Component{
    render(){
        return (
            <div>
                <Nav/>
                <Content/>
               
                
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
