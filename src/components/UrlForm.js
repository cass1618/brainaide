import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function UrlForm(props) {

    function handleUrlFormSubmission(e) {

        e.preventDefault();

        props.onLoadingUrl({url: e.target.url.value, id: v4()});
    }

    UrlForm.propTypes = {
        onLoadingUrl: PropTypes.func
    }

    return (
        <React.Fragment>
            <form onSubmit={handleUrlFormSubmission}>
                <input
                    type="text"
                    name="url"
                    placeholder="Enter URL"/>
                    <button type="submit">LOAD</button>
            </form>
        </React.Fragment>
    );
}

export default UrlForm;