import * as c from './../actions/ActionTypes';

const displayTextReducer = (state = {}, action) => {

    const {url, id} = action;

    switch(action.type) {

        case c.LOAD_URL:
            return Object.assign({}, state, {
                [id]: {
                    url: url
                }
            });

        default:
            return state;
            
    }
}

export default displayTextReducer;