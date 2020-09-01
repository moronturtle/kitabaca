import { SELECTED_IMAGE_FILES } from "../../actions/types";

const initialState = {
  fileImage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECTED_IMAGE_FILES:
      return {
        ...state,
        fileImage: action.payload.file
      };

    case "RESET_DATA_ARTICLE":
      return initialState;

    default:
      return state;
  }
}
