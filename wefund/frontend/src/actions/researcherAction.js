import axios from "axios";

// REGISTER RESEARCHER
export const registerResearcher = ({
  id_card_number,
  id_card_copy,
  date_of_birth,
  degree,
  organisation,
  cv,
}) => (dispatch, getState) => {
  // Is Loading
  dispatch({ type: "LOADING" });

  // Get Token
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Token ${token}`,
    },
  };

  // Data
  const formData = new FormData();
  formData.append("id_card_number", id_card_number);
  formData.append("id_card_copy", id_card_copy);
  formData.append("date_of_birth", date_of_birth);
  formData.append("degree", degree);
  formData.append("organisation", organisation);
  formData.append("cv", cv);

  axios
    .post("/api/account/researcher/", formData, config)
    .then((res) => {
      dispatch({ type: "RESEARCHER_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "RESEARCHER_FAIL", payload: err.response.data });
    });
};
