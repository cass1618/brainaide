import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function UrlForm(props) {

    function handleUrlFormSubmission(e) {
        e.preventDefault();
        console.log("FORM");
        props.onLoadingUrl({url: e.target.url.value, id: v4()});
    }

    UrlForm.propTypes = {
        onLoadingUrl: PropTypes.func
    }

    return (
        <React.Fragment>
            <form onSubmit={handleUrlFormSubmission}>
                <input
                    type="url"
                    name="urlname"
                    placeholder="Enter URL"/>
            </form>
        </React.Fragment>
    );
}

UrlForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
}

export default UrlForm;