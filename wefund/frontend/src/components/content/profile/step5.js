import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Provider, useDispatch, useSelector} from "react-redux";
import {addResearch} from "../../../actions/researchAction";
const Step5 = (props) => {
  const {values, handleChange} = props;
  const dispatch = useDispatch();
  const [researchDocument,
    setresearchDocument] = useState(undefined);
  const researchDocumentSelectedHandler = e => {
    setresearchDocument(e.target.files[0])
  }
  //Saving Methode of research

  const save = e => {
    e.preventDefault();
    alert('Your Research have been submited correctly');
    let form_data = new FormData();
    form_data.append('title', props.values.title);
    form_data.append('user_type', props.values.user_type);
    form_data.append('looking_for', props.values.looking_for)
    form_data.append('interested_in', props.values.interested_in);
    form_data.append('description', props.values.description);
    form_data.append('organization', props.values.organisation);
    form_data.append('papers', researchDocument, researchDocument.name);
    dispatch(addResearch(form_data));
    //calling to the next
  //  props.nextStep()
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="log3">
              <center>
                <h4 id="upload">Now Upload your search files and documents</h4>
                <div id="login">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="f"
                      placeholder="Title"
                      name="title"
                      onChange={handleChange('title')}
                      defaultValue={values.title}
                      aria-label="title"
                      aria-describedby="basic-addon1"/> {/** <input
                      type="text"
                      id="f"
                      className="form-control"
                      placeholder="Research Date"
                      name="searchDate"
                      onChange={handleChange('searchDate')}
                      defaultValue={values.searchDate}
                      aria-label="Research Date"
                      aria-describedby="basic-addon1"/> */}
                  </div>
                  <input
                    type="text"
                    id="f"
                    className="form-control"
                    placeholder="Source"
                    name="source"
                    onChange={handleChange('source')}
                    defaultValue={values.source}
                    aria-label="source"
                    aria-describedby="basic-addon1"/>
                </div>
                <textarea
                  id="ta"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange('description')}
                  defaultValue={values.description}
                  aria-label="Description"
                  aria-describedby="basic-addon1"/>
                <form className="md-form">
                  <div
                    className="file-field"
                    style={{
                    marginTop: 10
                  }}>
                    <a className="btn-floating peach-gradient mt-0 float-left">
                      <i className="fas fa-upload" aria-hidden="true"/>
                      <input
                        type="file"
                        onChange={researchDocumentSelectedHandler}
                        defaultValue={values.papers}/>
                    </a>
                    <div className="file-path-wrapper">
                      <input
                        className="file-path validate"
                        type="text"
                        defaultValue="Attach Document ( ZIP)"/>
                    </div>
                  </div>
                </form>
                <button id="s-two" className="btn btn-danger" onClick={save}>
                  Finish
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Step5;
