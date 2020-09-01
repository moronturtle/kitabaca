import {
  ADD_CATEGORY_ARTICLE,
  GET_CATEGORY_ARTICLE,
  DELETE_CATEGORY_ARTICLE
} from "../types";
import axios from "axios";

export const addCategory = category => dispatch => {
  axios
    .post("/api/category", category)
    .then(res =>
      dispatch({
        type: ADD_CATEGORY_ARTICLE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getCategory = () => dispatch => {
  axios
    .get("/api/category")
    .then(res =>
      dispatch({
        type: GET_CATEGORY_ARTICLE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteCategory = id => (dispatch, getState) => {
  axios
    .delete(`/api/category/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CATEGORY_ARTICLE,
        payload: id
      })
    )
    .catch(err =>
      // dispatch(returnErrors(err.response.data, err.response.status))
      err => console.log(err)
    );
};
