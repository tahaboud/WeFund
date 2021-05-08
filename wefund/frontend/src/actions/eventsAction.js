import axios from "axios";

// GET LEADS
export const getEvents = () => (dispatch, getState) => {
  dispatch({ type: "EVENTS_LOADING" });
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: "GET_EVENTS_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: "GET_EVENTS_FAIL", payload: err.response.data })
    );
};

export const addAttendant = (
  first_name,
  last_name,
  email,
  phone_number,
  id_number,
  event_id
) => (dispatch) => {
  dispatch({ type: "EVENTS_LOADING" });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    phone_number,
    id_number,
  });
  axios
    .post(`/api/events/${event_id}/subs/`, body, config)
    .then((res) => {
      dispatch({ type: "ATTENDANT_ADD_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ATTENDANT_ADD_FAIL", payload: err.response.data });
    });
};
