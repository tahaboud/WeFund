import React from "react";
import styled from "styled-components";

const Form = ({ setSubmitted, setUsername }) => {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <form onSubmit={onSubmit} style={{ background: "white" }}>
      <div className="container">
        <div className="row justify-content-md-center align-self-center">
          <div className="form-group row mb-5">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={onChange}
            />
          </div>
          <div className="form-group row align-items-center m-2">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
