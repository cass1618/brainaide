import React from "react";
import PropTypes from "prop-types";

function TextSection(props) {

    return (
        <React.Fragment>
            <div onClick = {() => props.whenTextClicked(props.id)}>
                <h3>{props.location}</h3>
            </div>
        </React.Fragment>
    )
}

TextSection.propTypes = {
    line: PropTypes.string.line,
    whenTextClicked: PropTypes.function
}

export default TextSection;