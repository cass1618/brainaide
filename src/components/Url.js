import React from "react";
import PropTypes from "prop-types";

function Url(props) {

    return (
        <React.Fragment>
            <h2>{props.url}</h2>
        </React.Fragment>
    );
}

Url.propTypes = {
    url: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string
}

export default Url;