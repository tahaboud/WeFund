import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Provider, useDispatch, useSelector } from "react-redux";
import { registerResearcher } from "../../../actions/researcherAction";
import Moment from 'moment';
import "../css/style.css";

const Step1 = (props) => {
  const { values, handleChange } = props;
  const dispatch = useDispatch();
  const [Cv,
    setCv] = useState(undefined);
  const [IdCard,
    setIdCard] = useState(undefined);
  const CvSelectedHandler = e => {
    setCv(e.target.files[0])
  }
  const IdCardSelectedHandler = e => {
    setIdCard(e.target.files[0])
  }
  //Methode for saving the resercher
  const save = e => {
    e.preventDefault();
   // alert("Researcher have finished his Registration:" + props.values.id_card_number);

    let form_data = new FormData();
    form_data.append('id_card_number',props.values.id_card_number);
    form_data.append('id_card_copy', IdCard, IdCard.name);
    form_data.append('date_of_birth', '2021-02-10')
    form_data.append('date_of_birth', Moment(props.values.date_of_birth).format('YYYY-MM-DD'));
    form_data.append('degree', props.values.degree);
    form_data.append('organisation', props.values.organisation);
    form_data.append('cv', Cv, Cv.name);
    dispatch(registerResearcher(form_data));
    //calling to the next 
    props.nextStep()
  }
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="card border-0 rounded-0 shadow-sm">
            <div className="container">
              <div className="row align-items-center py-5">
                <div className="col-lg-6">
                  <img
                    src="../../../../static/img/event.png"
                    alt="event"
                    width="100%"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <div className="container">
                      <h2 className="text-capitalize fw-bold text-center my-4">
                        Complete your application
                      </h2>
                      <form className="row justify-content-center">
                        <div className="col-lg-6 mb-3">
                          <label
                            htmlFor="name"
                            className="small text-secondary"
                          >
                            Birth Date <span className="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            className="form-control py-3"
                            id="name"
                            name="date_of_birth"
                            onChange={handleChange("date_of_birth")}
                            defaultValue={values.date_of_birth}
                            placeholder="Birth Date"
                          />
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            Birth Date errors.
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          
                          <label
                            htmlFor="card_id"
                            className="small text-secondary"
                          >
                            National Card ID Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                           <input
                            type="number" pattern="[0-9]*"
                            className="form-control py-3"
                            placeholder="ID Card Number"
                            aria-label="ID Card"
                            name="id_card_number"
                            onChange={handleChange('id_card_number')}
                            defaultValue={values.id_card_number}
                            aria-describedby="basic-addon1"
                            id="s1"/>
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            ID number errors.
                          </div>

                        </div>
                        <div className="col-12">
                          <label htmlFor="search" className="form-label">
                            Attach Your National Card  <span className="text-danger">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control py-3"
                            id="search"
                            name="id_card_copy"
                            onChange={IdCardSelectedHandler}
                            defaultValue={values.id_card_copy}
                          />
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            CV errors.
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            htmlFor="degree"
                            className="small text-secondary"
                          >
                            Degree <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control py-3"
                            id="degree"
                            name="degree"
                            onChange={handleChange('degree')}
                            defaultValue={values.degree}
                            placeholder="Organisation"
                          />
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            Degree address errors.
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          <label htmlFor="organisation" className="form-label">
                            Organisation <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control py-3"
                            id="organisation"
                            name="organisation"
                            onChange={handleChange('organisation')}
                            defaultValue={values.organisation}
                            placeholder="Organisation"
                          />
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            Organisation errors.
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          <label htmlFor="search" className="form-label">
                            Search Type <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control py-3"
                            id="search"
                            name="searchtype"
                            onChange={handleChange('searchtype')}
                            defaultValue={values.searchtype}
                            placeholder="Search Type"
                          />
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            Search type errors.
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="search" className="form-label">
                            Attach CV <span className="text-danger">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control py-3"
                            id="search"
                            name="cv"
                            onChange={CvSelectedHandler}
                            defaultValue={values.cv}
                          />
                          <div className="form-text text-danger samll">
                            <i className="fas fa-exclamation-circle me-1" />
                            CV errors.
                          </div>
                        </div>
                        <div className="mt-5 text-center text-lg-end">
                          <button
                            className="btn btn-dark px-5 py-3 text-capitalize btn-shadow"
                            onClick={save}
                          >
                            Continue
                            <i className="fas fa-arrow-right small ms-3" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step1;
