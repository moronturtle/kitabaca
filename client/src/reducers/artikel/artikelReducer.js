import {
  ADD_ITEMS_ARTICLE,
  DATA_ARTICLE,
  GET_ITEMS_ARTICLE,
  DELETE_ITEMS_ARTICLE,
  RESET_STATUS_DATA_ARTICLE
} from "../../actions/types";

const initialState = {
  articleItems: [],
  dataArticle: {
    title: "",
    content: ""
  },
  success: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS_ARTICLE:
      return {
        ...state,
        articleItems: [action.payload, ...state.articleItem]
      };

    case DATA_ARTICLE:
      return {
        ...state,
        dataArticle: {
          title: action.payload.title,
          content: action.payload.content
        }
      };

    case GET_ITEMS_ARTICLE:
      return {
        ...state,
        articleItems: action.payload
      };

    case DELETE_ITEMS_ARTICLE:
      return {
        ...state,
        articleItems: state.articleItems.filter(
          item => item._id !== action.payload
        )
      };

    case "RESET_DATA_ARTICLE":
      return { ...state, success: true };

    case RESET_STATUS_DATA_ARTICLE:
      return {
        ...state,
        success: false,
        dataArticle: {
          title: "",
          content: ""
        }
      };

    default:
      return state;
  }
}
