import * as c from "./../actions/ActionTypes";

let initialState = {
    isLoading: false,
    rawHtml: "empty",
    error: null,
    formVisibleOnPage: false
}
  
export default (state = initialState, action) => {
    
    switch(action.type) {

        case c.REQUEST_HTML:
            console.log("REQUEST HTML")
            return Object.assign({}, state, {
                isLoading: true
            });

        case c.GET_HTML_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                rawHtml: action.rawHtml
            });

        case c.GET_HTML_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        default:
            return state;
    }
};