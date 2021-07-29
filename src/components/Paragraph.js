import React from "react";
import PropTypes from "prop-types";
import "./../styles/Paragraph.css";
import {Markup} from "interweave";

function Paragraph(props) {

    return (
        

        <React.Fragment>
            <div className = "wrapper">
                <div onKeyDown = {() => props.onKeyDown(props.id)}>
                <Markup content={"<p>"+props.section+"</p>"}/>
                    <h3>{"<p>"+props.section+"</p>"}</h3>
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