import axios from "axios";
import { tokenConfig } from "./authAction";

export const getAdminSignature = ({ role }) => (dispatch, getState) => {
  // Zoom Loading
  dispatch({ type: "ZOOM_LOADING" });

  // Body
  const body = JSON.stringify({ role });

  axios
    .post("/api/addins/admin/getsign/", body, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: "SIGNATURE_GENERATED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "SIGNATURE_FAILED", payload: err.response.data });
    });
};

export const getUserSignature = () => (dispatch) => {
  // Zoom Loading
  dispatch({ type: "ZOOM_LOADING" });

  // Config
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post("/api/addins/getsign/", config)
    .then((res) => {
      dispatch({ type: "SIGNATURE_GENERATED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "SIGNATURE_FAILED", payload: err.response.data });
    });
};
