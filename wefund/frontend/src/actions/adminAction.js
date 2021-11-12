import axios from "axios";
import { multipartTokenConfig, tokenConfig } from "./config";
import { encrypt } from "./researcherAction";

export const getUsers = () => (dispatch, getState) => {
  dispatch({ type: "ADMIN_LOADING" });
  axios
    .get("/api/account/admin/users/", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: "USERS_GET_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "USERS_GET_FAIL", payload: err.response.data });
    });
};

export const getResearches = () => (dispatch, getState) => {
  dispatch({ type: "ADMIN_LOADING" });
  axios
    .get("/api/research/admin/", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: "RESEARCHES_GET_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "RESEARCHES_GET_FAIL", payload: err.response.data });
    });
};

export const getAdminMedia =
  (pk, path, id, fileName) => (dispatch, getState) => {
    const token = encrypt(getState().auth.user.user.last_login, path, fileName);

    dispatch({
      type: "ADMIN_MEDIA_URL",
      payload: {
        url: `admin/media/${pk}/researcher/${path}/${id}/${fileName}/${token}/`,
      },
    });
  };

export const updateUserAdmin =
  (is_admin, is_validated, pk) => (dispatch, getState) => {
    dispatch({ type: "ADMIN_LOADING" });
    const body = JSON.stringify({ is_admin, is_validated });
    axios
      .post(`/api/account/admin/users/${pk}/`, body, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: "ADMIN_USER_UPDATE_SUCCESS", payload: res.data });
        dispatch(getUsers());
      })
      .catch((err) => {
        dispatch({
          type: "ADMIN_USER_UPDATE_FAIL",
          payload: err.response.data,
        });
      });
  };

export const getEvents = () => (dispatch, getState) => {
  dispatch({ type: "ADMIN_LOADING" });
  axios
    .get("/api/events/")
    .then((res) => {
      dispatch({
        type: "ADMIN_EVENTS_GET_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: "ADMIN_EVENTS_GET_FAIL", payload: err.response.data })
    );
};

export const EditEvent =
  (
    eventId,
    name,
    image,
    description,
    date,
    spots,
    free,
    price,
    category,
    online,
    location
  ) =>
  (dispatch, getState) => {
    dispatch({ type: "ADMIN_LOADING" });
    const formData = new FormData();
    formData.append("name", name);
    image && formData.append("image", image);
    formData.append("description", description);
    formData.append("date_and_time", date);
    formData.append("spots", spots);
    formData.append("is_free", free);
    free ? formData.append("price", "0") : formData.append("price", price);
    formData.append("category", category);
    formData.append("is_online", online);
    formData.append("location", location);
    axios
      .put(`/api/events/${eventId}/`, formData, multipartTokenConfig(getState))
      .then((res) => {
        dispatch({ type: "EVENT_UPDATE_SUCCESS", payload: res.data });
        dispatch(getEvents());
      })
      .catch((err) => {
        dispatch({ type: "EVENT_UPDATE_FAIL", payload: err.response.data });
      });
  };

export const addEvent =
  (
    name,
    image,
    description,
    date,
    spots,
    free,
    price,
    category,
    online,
    location
  ) =>
  (dispatch, getState) => {
    dispatch({ type: "ADMIN_LOADING" });
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("date_and_time", date);
    formData.append("spots", spots);
    formData.append("is_free", free);
    free ? formData.append("price", "0") : formData.append("price", price);
    formData.append("category", category);
    formData.append("is_online", online);
    formData.append("location", location);
    axios
      .post(`/api/events/`, formData, multipartTokenConfig(getState))
      .then((res) => {
        dispatch({ type: "EVENT_ADD_SUCCESS", payload: res.data });
        dispatch(getEvents());
      })
      .catch((err) => {
        dispatch({ type: "EVENT_ADD_FAIL", payload: err.response.data });
      });
  };

export const deleteEvent = (eventId) => (dispatch, getState) => {
  dispatch({ type: "ADMIN_LOADING" });
  axios
    .delete(`/api/events/${eventId}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: "EVENT_DELETE_SUCCESS", payload: res.data });
      dispatch(getEvents());
    })
    .catch((err) => {
      dispatch({ type: "EVENT_DELETE_FAIL", payload: err.response.data });
    });
};

export const getAttendants = (eventId) => (dispatch, getState) => {
  dispatch({ type: "ADMIN_LOADING" });
  axios
    .get(`/api/events/${eventId}/subs/`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: "ATTENDANTS_GET_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ATTENDANTS_GET_FAIL", payload: err.response.data });
    });
};
