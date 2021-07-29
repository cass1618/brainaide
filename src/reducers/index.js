import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    // storedHtmlFileList: htmlReducer,
    firestore: firestoreReducer
});

export default rootReducer;