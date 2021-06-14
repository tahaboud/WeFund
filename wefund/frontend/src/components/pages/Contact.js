import React, {useState, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {addContact} from '../../actions/contactAction';
import PropTypes from "prop-types";
import Nav from "../content/Nav";
import Footer from "../content/Footer";


const Contact = () => {
  const init = {
    email: '',
    head: '',
    content: ''
  }
  //Declaring hooks
  const dispatch = useDispatch();
  const [values,
    setValues] = useState(init);

  const onChange = (event) => {
    //Hnadle Change
      setValues({...values, [event.target.name]: event.target.value});
    
  };

  useEffect(() => {
    

  }, []);
  const submit = (e) => {
    e.preventDefault();
    alert("Your cotact message have been submited")
    const contact={
      name:values.head,
      email:values.email,
      message:values.content
    }
    
  
    dispatch(addContact(contact));



  };
  return (
    <div>
      <Nav/>
       <center>
       <div className="col-6 " style={{paddingTop:'50px'}}>
          <form noValidate className="needs-validation" onSubmit={submit}>

            <div id="login">
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control "
                  placeholder="Email"
                  value={values.email}
                  onChange={onChange}/> 
              </div>
              <div className="input-group mb-3">
                <input
 
                  name="head"
                  className="form-control "
                  placeholder="Head"
                  value={values.head}
                  onChange={onChange}/>
              </div>
              <div className="input-group mb-3">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Type your demande"
                  value={values.content}
                  onChange={onChange}/>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-danger"
              id="in"
              >
              Contact US
            </button>
          </form>
        </div>
       </center>

      
      <div style={{
        visibility: 'hidden'
      }}>s</div>
      <div style={{
        visibility: 'hidden'
      }}>s</div>
      <Footer/>
    </div>
  );
};

export default Contact;
