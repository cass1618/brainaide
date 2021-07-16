import formVisibleReducer from "./form-visible-reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
});

export default rootReducer;