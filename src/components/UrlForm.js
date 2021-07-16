import React from "react";
import PropTypes from "prop-types";

function UrlForm(props) {

    function handleUrlFormSubmission(e) {
        e.preventDefault();
        props.onLoadingUrl(console.log("LOADING URL"));
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