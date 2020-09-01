// import axios from "axios";
import {
  RESET_DATA_ARTICLE,
  GET_ITEMS_ARTICLE,
  DELETE_ITEMS_ARTICLE,
  GET_MAIN_NEWS_ARTICLE,
  GET_NEWS,
  RESET_STATUS_DATA_ARTICLE,
  GET_CATEGORY_NEWS_ARTICLE
} from "../types";
import axios from "axios";

export const resetStatusArticle = () => {
  return {
    type: RESET_STATUS_DATA_ARTICLE
  };
};

export const addArticle = item => dispatch => {
  axios
    .post("/api/article", item)
    .then(res =>
      dispatch({
        type: RESET_DATA_ARTICLE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getArticle = () => dispatch => {
  axios
    .get("/api/article")
    .then(res =>
      dispatch({
        type: GET_ITEMS_ARTICLE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getMainNews = () => dispatch => {
  axios
    .get("/api/article/main-news")
    .then(res =>
      dispatch({
        type: GET_MAIN_NEWS_ARTICLE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getCategoryNews = () => dispatch => {
  axios
    .get("/api/article/category-news")
    .then(res =>
      dispatch({
        type: GET_CATEGORY_NEWS_ARTICLE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getNews = id => dispatch => {
  axios
    .get(`/api/article/news/${id}`)
    .then(res =>
      dispatch({
        type: GET_NEWS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteArticle = id => dispatch => {
  axios
    .delete(`/api/article/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEMS_ARTICLE,
        payload: id
      })
    )
    .catch(err =>
      // dispatch(returnErrors(err.response.data, err.response.status))
      err => console.log(err)
    );
};
