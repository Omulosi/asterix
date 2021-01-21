import axios from "axios";
import {
  LOADING,
  LOGIN,
  SET_ERRORS,
  UPDATE_USER_DETAILS,
  EDITTING_USER,
  LOGOUT,
  SUCCESS,
} from "../types";
import { axiosWithAuth } from "../../utils/axiosAuth";

import { BASE_URL } from "../../config/index";

export const userLogin = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING });
  debugger;
  axios
    .post(`${BASE_URL}/auth/login`, {
      email: userData.email,
      password: userData.password,
    })
    .then(({ data }) => {
      // get user details too: data.userId
      const token = data.token;
      localStorage.setItem("token", `${token}`);
      history.push("/c/dashboard");
    })
    .catch((err) => {
      let errorMsg;
      if (err.response) {
        if (err.response.data.non_field_errors) {
          errorMsg = err.response.data.non_field_errors[0]
        }
        else{
          errorMsg = err.message;
        }
      }
      dispatch({
        type: SET_ERRORS,
        payload: { errorMsg },
      });
      alert(errorMsg);
     
    });
};

export const userSignUp = (userData, history) => (dispatch) => {
  debugger;
  dispatch({ type: LOADING });
  axios
    .post(`${BASE_URL}/auth/signup`, {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      password: userData.password
    })
    .then(({ data }) => {
      const token = data.token;
      localStorage.setItem("token", `${token}`);
      history.push("/c/dashboard");
    })
    .catch((err) => {
      let errorMsg;
      if (err.response) {
        if (err.response.data.non_field_errors) {
          errorMsg = err.response.data.non_field_errors[0]
        }
        else{
          errorMsg = err.message;
        }
      }
      dispatch({
        type: SET_ERRORS,
        payload: { errorMsg },
      });
      alert(errorMsg);
    
    });
};

export const updateUser = (user, field, newData) => (dispatch) => {
  dispatch({ type: EDITTING_USER });
  axiosWithAuth()
    .patch(`/users/${user.id}/${field}`, newData)
    .then(({ data }) => {
      const user = data.data[0];
      dispatch({
        type: UPDATE_USER_DETAILS,
        payload: user,
      });
      localStorage.setItem("profile", JSON.stringify(user));
    })
    .catch((err) => {
      let error = err.response ? err.response.data.error : err.message;
      dispatch({
        type: SET_ERRORS,
        payload: { error },
      });
    });
};

export const logout = (history) => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.setItem("reduxState", null);
  dispatch({ type: LOGOUT });
  history.push("/login");
  window.location.reload(true);
};
