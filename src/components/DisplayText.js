import React from "react";
import PropTypes from "prop-types";
import TextSection from "./TextSection";

function DisplayText(props) {

    return (
        <React.Fragment>
            <TextSection
                
            />
            {/* {Object.values(props.displayText).map((textSection) =>
            <TextSection
                whenTextClicked = {props.onClickingText}
                line = {textSection.line}/>
            )} */}
        </React.Fragment>
    );
}

DisplayText.propTypes = {
    // url: PropTypes.string,
    displayText: PropTypes.object,
    onClickingText: PropTypes.func
}

export default DisplayText;