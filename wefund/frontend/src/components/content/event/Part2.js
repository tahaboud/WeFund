import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const Part2 = (props) => {
  //Declaring hooks
  const init = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    id_number: ''
  }
  const [values,
    setValues] = useState(init);
  //Hnadle Change
  const handleChange = (event) => {
    
    setValues({...values, [event.target.name]: event.target.value});
  }
  //Save Methode
  const save = e => {
    e.preventDefault();
    alert("Your attendant was submited please follow and continue your payment:" );
    const event_id=localStorage.getItem('event_id');
    const config={
        "Content-Type":"application/json"
    }
    const user =  JSON.stringify(values)
    const user2={
      first_name:values.first_name,
      last_name:values.last_name,
      email:values.email,
      phone_number:values.phone_number,
      id_number:values.id_number

  };

    axios.post("/api/events/"+event_id+"/subs/",user2,config)
    .catch(res => {
      console.log(res.response.data);
    })
  
  }
  return (
    <div>
      <div className="event1">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div
                className="log1"
                style={{
                  width: 350,
                  height: 350,
                }}
              >
                <img
                  src="../static/img/sddx.png"
                  height={300}
                  width={400}
                  alt="we fund"
                  id="evimg"
                  style={{
                    borderRadius: 20,
                    marginRight: 20,
                  }}
                />
                <img
                  src="../static/img/Component 8.png"
                  id="cmp"
                  height={60}
                  width={60}
                />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                </h5>
              </div>
            </div>
            <div className="col-6">
              <div className="log2">
                <center>
                  <div id="login">
                    <h4>Register to event now !</h4>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile"
                      name="phone_number"
                      value={values.phone_number}
                      onChange={handleChange}
                      aria-label="mobile"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="National Card id "
                    name="id_number"
                    value={values.id_number}
                    onChange={handleChange}
                    aria-label="National Card id"
                    aria-describedby="basic-addon1"
                  />
                  <div className="spinner">
                    <label>
                      <input
                        type="checkbox"
                        onClick="$(this).attr('disabled','disabled');"
                      />
                      <span className="checkmark">
                        <span>&nbsp;</span>
                      </span>
                      <span
                        style={{
                          width: "100%",
                        }}
                      >
                        by clicking Confirm you are agreeing to our terms and
                        conditions!
                      </span>
                    </label>
                  </div>
                  <Button color="primary" variant="contained" onClick={save}>Confirm & Continue</Button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
