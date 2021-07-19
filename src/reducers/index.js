import htmlReducer from "./html-reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    storedHtmlFileList: htmlReducer
});

export default rootReducer;