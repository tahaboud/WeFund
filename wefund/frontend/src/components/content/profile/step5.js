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

  const finish = e => {
  //  alert('Your Research have been submited correctly');
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
                  <img src="../../../../static/img/event.png" alt="event" width="100%" />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <div className="container">
                      <h2 className="text-capitalize fw-bold text-center my-4">Now Upload your searche file and documents</h2>
                      <form className="row justify-content-center">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="title" className="small text-secondary">Title <span className="text-danger">*</span></label>
                          <input type="text" className="form-control py-3" id="title" name="title" onChange={handleChange('title')}defaultValue={values.title} placeholder="Title" />
                          <div className="form-text text-danger samll"><i className="fas fa-exclamation-circle me-1" />Title errors.</div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="date" className="small text-secondary">Research Date <span className="text-danger">*</span></label>
                          <input type="date" className="form-control py-3" id="date" name="searchDate" onChange={handleChange('searchDate')} defaultValue={values.searchDate} />
                          <div className="form-text text-danger samll"><i className="fas fa-exclamation-circle me-1" />Date errors.</div>
                        </div>
                        <div className="col-12 mb-3">
                          <label htmlFor="source" className="small text-secondary">Source <span className="text-danger">*</span></label>
                          <input type="text" className="form-control py-3" id="source"  name="source"onChange={handleChange('source')} defaultValue={values.source} aria-label="source" placeholder="Source" />
                          <div className="form-text text-danger samll"><i className="fas fa-exclamation-circle me-1" />Source errors.</div>
                        </div>
                        <div className="col-12 mb-3">
                          <label htmlFor="description" className="small text-secondary">Description <span className="text-danger">*</span></label>
                          <textarea className="form-control py-3" id="description" placeholder="Description" name="description" onChange={handleChange('description')}
                  defaultValue={values.description} rows={3}  />
                          <div className="form-text text-danger samll"><i className="fas fa-exclamation-circle me-1" />Description errors.</div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="documents" className="small text-secondary">Attach Documents <span className="text-danger">*</span></label>
                          <input
                            type="file"
                            id="papers"
                            name="papers"
                            onChange={researchDocumentSelectedHandler}
                            defaultValue={values.papers} />
                          <div className="form-text text-danger samll"><i className="fas fa-exclamation-circle me-1" />Documents errors.</div>
                        </div>
                        <div className="mt-5 text-center text-lg-end">
                          <button id="s-two" className="btn btn-dark px-5 py-3 text-capitalize btn-shadow" onClick={finish}>
                             Finish<i className="fas fa-arrow-right small ms-3" />
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

export default Step5;
