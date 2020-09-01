import { combineReducers } from "redux";
import artikelReducer from "./artikel//artikelReducer";
import categoryReducer from "./artikel/categoryReducer";
import imageFileReducer from "./artikel/imageFileReducer";
import mainNewsPageReducer from "./artikel/mainNewsPageReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  artikel: artikelReducer,
  category: categoryReducer,
  imageFile: imageFileReducer,
  mainNews: mainNewsPageReducer,
  auth: authReducer,
  error: errorReducer
});
