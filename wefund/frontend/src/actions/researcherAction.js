import axios from "axios";
import { loadUser } from "./authAction";

// TODO change to something with more entropy

export function encrypt(msg, password, salt) {
  const CryptoJS = require("crypto-js");
  let iterations = 128;
  let bytes = CryptoJS.PBKDF2(password, salt, {
    keySize: 48,
    iterations: iterations,
  });
  let iv = CryptoJS.enc.Hex.parse(bytes.toString().slice(0, 32));
  let key = CryptoJS.enc.Hex.parse(bytes.toString().slice(32, 96));

  let ciphertext = CryptoJS.AES.encrypt(msg, key, { iv: iv });
  return ciphertext.toString().replaceAll("/", "Por21Ld");
}

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
  dispatch({ type: "RESEARCHER_LOADING" });

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
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch({ type: "RESEARCHER_FAIL", payload: err.response.data });
    });
};

export const getResearcher = () => (dispatch, getState) => {
  dispatch({ type: "RESEARCHER_LOADING" });

  axios
    .get("/api/account/researcher/", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: "RESEARCHER_GET_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "RESEARCHER_GET_FAIL", payload: err.response.data });
    });
};

export const updateResearcher = ({
  id_card_number,
  id_card_copy,
  organisation,
  date_of_birth,
  degree,
  cv,
}) => (dispatch, getState) => {
  dispatch({ type: "RESEARCHER_LOADING" });

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
  id_card_copy !== "" && formData.append("id_card_copy", id_card_copy);
  formData.append("date_of_birth", date_of_birth);
  formData.append("degree", degree);
  formData.append("organisation", organisation);
  cv !== "" && formData.append("cv", cv);

  axios
    .put("/api/account/researcher/", formData, config)
    .then((res) => {
      dispatch({ type: "RESEARCHER_UPDATE_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "RESEARCHER_UPDATE_FAIL", payload: err.response.data });
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

export const getMedia = (path, id, fileName) => (dispatch, getState) => {
  const token = encrypt(getState().auth.user.user.last_login, path, fileName);

  dispatch({
    type: "MEDIA_URL",
    payload: { url: `/media/researcher/${path}/${id}/${fileName}/${token}` },
  });
};
