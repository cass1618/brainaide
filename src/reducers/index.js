import formVisibleReducer from "./form-visible-reducer";
import htmlReducer from "./html-reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    rawHtml: htmlReducer
});

export default rootReducer;