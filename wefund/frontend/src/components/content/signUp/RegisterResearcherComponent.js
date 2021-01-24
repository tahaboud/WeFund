import React, { useState } from "react";
// Import Router
import { Redirect } from "react-router-dom";
//Import Redux
import { useSelector, useDispatch } from "react-redux";
// Import Action
import { registerResearcher } from "../../../actions/researcherAction";

const RegisterResearcherComponent = () => {
  const [id_card_number, setIdCardNumber] = useState("");
  const [id_card_copy, setIdCardCopy] = useState(null);
  const [date_of_birth, setDateOfBirth] = useState("");
  const [degree, setDegree] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [cv, setCv] = useState(null);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.researcher);
  const dispatch = useDispatch();
  const onChange = (e) => {
    switch (e.target.name) {
      case "id_card_number":
        return setIdCardNumber(e.target.value);
      case "id_card_copy":
        return setIdCardCopy(e.target.files[0]);
      case "date_of_birth":
        return setDateOfBirth(e.target.value);
      case "degree":
        return setDegree(e.target.value);
      case "organisation":
        return setOrganisation(e.target.value);
      case "cv":
        console.log(e.target.files[0].name);
        return setCv(e.target.files[0]);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerResearcher({
        id_card_number,
        id_card_copy,
        date_of_birth,
        degree,
        organisation,
        cv,
      })
    );
  };

  return isLoading ? (
    <div className="text-center">Please Wait</div>
  ) : isAuthenticated ? (
    user.is_researcher ? (
      <Redirect to="/profile" />
    ) : (
      <form
        className="needs-validation"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="id_card_number"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              name="id_card_copy"
              className="custom-file-input"
              id="id_card_copy"
              onChange={onChange}
            />
            <label
              className="custom-file-label"
              htmlFor="id_card_copy"
              aria-describedby="inputGroupFileAddon02"
            >
              Passport / ID Card
            </label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="date_of_birth"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="degree"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="organisation"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              name="cv"
              className="custom-file-input"
              id="cv"
              onChange={onChange}
            />
            <label
              className="custom-file-label"
              htmlFor="cv"
              aria-describedby="inputGroupFileAddon02"
            >
              CV
            </label>
          </div>
        </div>
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default RegisterResearcherComponent;
