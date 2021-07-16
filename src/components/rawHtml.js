import React from "react";
import PropTypes from "prop-types";

function RawHtml(props) {

    return (
        <React.Fragment>
            <h2>{props.url}</h2>
        </React.Fragment>
    );
}

RawHtml.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string
}

export default RawHtml;