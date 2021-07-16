import React from "react";

function UrlForm(props) {
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

export default UrlForm;