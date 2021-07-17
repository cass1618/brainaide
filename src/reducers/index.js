import formVisibleReducer from "./form-visible-reducer";
import displayTextReducer from "./display-text-reducer"
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    allSections: displayTextReducer
});

export default rootReducer;