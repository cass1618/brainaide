import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/index";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {createFirestoreInstance} from "redux-firestore";
import firebase from "./firebase";

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

const rrfProps = {
    firebase,
    config: {
        userProfile: "users"
    },
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App/>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();