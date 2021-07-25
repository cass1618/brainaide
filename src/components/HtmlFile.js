import React from "react";
import PropTypes from "prop-types";
import "./../styles/HtmlFile.css";

function HtmlFile(props) {

    return (
        <React.Fragment className = "wrapper">
            <div onClick = {() => props.whenUrlClicked(props.id)}>
                <h3>{props.url}</h3>
                <h3>{props.html}</h3>
            </div>
        </React.Fragment>
    );
}

HtmlFile.propTypes = {
    url: PropTypes.string.isRequired,
    html: PropTypes.string,
    whenUrlClicked: PropTypes.func
}

export default HtmlFile;