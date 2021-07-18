import * as c from './ActionTypes';
import request from "request-promise";

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});

export const requestHtml = () => ({
    type: c.REQUEST_HTML
});

export const getHtmlSuccess = (rawHtml) => ({
    type: c.GET_HTML_SUCCESS,
    rawHtml
});

export const getHtmlFailure = (error) => ({
    type: c.GET_HTML_FAILURE,
    error
})


export const makeApiCall = () => {
    return dispatch => {
        dispatch(requestHtml);

        return request(`http://api.scraperapi.com?api_key=${process.env.REACT_APP_API_KEY}&url=https://www.learnhowtoprogram.com/react/react-with-apis/introduction-to-redux-middleware&render=true&autoparse=true&country_code=us`)

        .then(response => {
            dispatch(getHtmlSuccess(response))
        })
        .catch(error => {
            dispatch(getHtmlFailure(error));
        })
    }
}