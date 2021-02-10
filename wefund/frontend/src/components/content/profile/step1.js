import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Provider, useDispatch, useSelector} from "react-redux";
import {addResearcher} from "../../../actions/researcher";
import Moment from 'moment';

const Step1 = (props) => {
  const {values, handleChange} = props;
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
    alert("Researcher have finished his Registration:"+props.values.id_card_number );
    
    let form_data = new FormData();

    form_data.append('id_card_number',props.values.id_card_number);
    form_data.append('id_card_copy', IdCard, IdCard.name);
    form_data.append('date_of_birth','2021-02-10')
   // form_data.append('date_of_birth', Moment(props.values.date_of_birth).format('YYYY-MM-DD'));
    form_data.append('degree', props.values.degree);
    form_data.append('organisation', props.values.organisation);
    form_data.append('cv', Cv, Cv.name);
    dispatch(addResearcher(form_data));
    //calling to the next 
    props.nextStep()
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="log3">
              <center>
                <h6 style={{
                  color: "black"
                }}>complete your application</h6>
              </center>
              <div className="input-group date" data-provide="datepicker"  data-date-format="yyyy/mm/dd">
                <input
                  type="date"
                  className="form-control"
                  name="date_of_birth"
                  onChange={handleChange('date_of_birth')}
                  defaultValue={values.date_of_birth}/>
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-th"/>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile02"
                        name="passport"
                        onChange={IdCardSelectedHandler}
                        defaultValue={values.id_card_copy}/>
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile02"
                        aria-describedby="inputGroupFileAddon02">
                        Passport / ID Card
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text" id="inputGroupFileAddon02">
                        Upload
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="number" pattern="[0-9]*"
                className="form-control"
                placeholder="ID Card Number"
                aria-label="ID Card"
                name="id_card_number"
                onChange={handleChange('id_card_number')}
                defaultValue={values.id_card_number}
                aria-describedby="basic-addon1"
                id="s1"/>
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                aria-label="Degree"
                name="degree"
                onChange={handleChange('degree')}
                defaultValue={values.degree}
                aria-describedby="basic-addon1"
                id="s1"/>
              <input
                type="text"
                className="form-control"
                placeholder="Organization"
                aria-label="Organization"
                name="organisation"
                onChange={handleChange('organisation')}
                defaultValue={values.organisation}
                aria-describedby="basic-addon1"
                id="s1"/>
              <input
                type="text"
                className="form-control"
                placeholder="Search Type"
                aria-label="Organization"
                name="searchtype"
                onChange={handleChange('searchtype')}
                defaultValue={values.searchtype}
                aria-describedby="basic-addon1"
                id="s1"/>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    name="cv"
                    onChange={CvSelectedHandler}
                    defaultValue={values.cv}
                    className="custom-file-input"
                    id="inputGroupFile02"/>
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile02"
                    aria-describedby="inputGroupFileAddon02">
                    Attach CV
                  </label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id="inputGroupFileAddon02">
                    Upload
                  </span>
                </div>
              </div>
              <button className="btn btn-danger" id="btnevent" onClick={save}>
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="log4">
              <img src height={120} width={120} id="uploa"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
