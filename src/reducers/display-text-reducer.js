import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {

    switch(action.type) {

        case c.LOAD_URL:
            return Object.assign({}, state, {
                [id]: {
                    url: url
                }
            })

        default:
            return state;
            
    }
}