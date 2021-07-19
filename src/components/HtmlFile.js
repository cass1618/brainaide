import React from "react";
import PropTypes from "prop-types";

function HtmlFile(props) {

    return (
        <React.Fragment>
            <h2>{props.url}</h2>
            <h2>{props.fullText}</h2>
        </React.Fragment>
    );
}

HtmlFile.propTypes = {
    url: PropTypes.string,
    fullText: PropTypes.string,
    id: PropTypes.string
}

export default HtmlFile;