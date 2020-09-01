import {
  ADD_CATEGORY_ARTICLE,
  GET_CATEGORY_ARTICLE,
  SELECTED_CATEGORY,
  DELETE_CATEGORY_ARTICLE
} from "../../actions/types";

const initialState = {
  category: [],
  selectedCategory: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY_ARTICLE:
      return {
        ...state,
        category: [action.payload, ...state.category]
      };

    case GET_CATEGORY_ARTICLE:
      return {
        ...state,
        category: action.payload
      };

    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.category
      };

    case DELETE_CATEGORY_ARTICLE:
      return {
        ...state,
        category: state.category.filter(item => item._id !== action.payload)
      };

    default:
      return state;
  }
}
