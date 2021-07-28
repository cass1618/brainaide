import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {

    const {url, id} = action;
    
    switch(action.type) {

        case c.ADD_FILE:
            return Object.assign({}, state, {
                [id]: {
                    url: url
                }
            })

        default:
            return state;
    }
};