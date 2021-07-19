import * as c from "./../actions/ActionTypes";

// let initialState = {
//     isLoading: true,
//     currentUrl: "empty",
//     error: null,
// }

export default (state = {}, action) => {
    // export default (state = initialState, action) => {

    const {url, id} = action;
    
    switch(action.type) {

        case c.ADD_FILE:
            return Object.assign({}, state, {
                [id]: {
                    url: url
                }
            })

        // case c.REQUEST_HTML:
        //     console.log("REQUEST HTML")
        //     return Object.assign({}, state, {
        //         isLoading: true
        //     });

        // case c.GET_HTML_SUCCESS:
        //     console.log("GET HTML SUCCESS")
        //     return Object.assign({}, state, {
        //         isLoading: false,
        //         htmlFile: action.htmlFile
        //     });

        // case c.GET_HTML_FAILURE:
        //     console.log("GET HTML FAILURE")
        //     return Object.assign({}, state, {
        //         isLoading: false,
        //         error: action.error
        //     });

        default:
            return state;
    }
};