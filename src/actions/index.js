import * as c from './ActionTypes';

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});

export const loadUrl = (url) => {

    return {
        type: c.LOAD_URL,
        url: url
    }
}