import React from "react";
import PropTypes from "prop-types";
import "./../styles/Paragraph.css";

function Paragraph(props) {

    return (
        <React.Fragment>
            <div className = "wrapper">
                <div onKeyDown = {() => props.onKeyDown(props.id)}>
                    <h3>{props.url}</h3>
                    <h3>{props.section}</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

Paragraph.propTypes = {
    url: PropTypes.string,
    html: PropTypes.string,
    section: PropTypes.string,
    onKeyDown: PropTypes.func,
}

export default Paragraph;