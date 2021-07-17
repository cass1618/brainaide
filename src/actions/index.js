import * as c from './ActionTypes';

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});

export const loadUrl = (rawHtml) => {

    console.log("loadUrl index reducer")
    const {url, id} = rawHtml;

    return {
        type: c.LOAD_URL,
        url: url,
        id: id
    }
}