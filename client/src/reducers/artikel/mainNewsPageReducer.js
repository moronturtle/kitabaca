import {
  GET_MAIN_NEWS_ARTICLE,
  GET_NEWS,
  GET_CATEGORY_NEWS_ARTICLE
} from "../../actions/types";

const initialState = {
  mainNewsItems: [],
  categoryNewsItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_NEWS_ARTICLE:
      return {
        ...state,
        mainNewsItems: action.payload
      };

    case GET_CATEGORY_NEWS_ARTICLE:
      return {
        ...state,
        categoryNewsItems: action.payload
      };

    case GET_NEWS:
      return {
        ...state,
        mainNewsItems: action.payload
      };

    default:
      return state;
  }
}
