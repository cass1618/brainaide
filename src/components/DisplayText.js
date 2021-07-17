import React from "react";
import PropTypes from "prop-types";
import RawHtml from "./RawHtml";

function DisplayText(props) {

    return (
        <React.Fragment>
            {Object.values(props.displayText).map((rawHtml) =>
            <RawHtml
                key = {rawHtml.id}
                url = {rawHtml.url}
                id = {rawHtml.id}/>
            )}
        </React.Fragment>
    );
}

DisplayText.propTypes = {
    displayText: PropTypes.object,
    onClickingText: PropTypes.func
}

export default DisplayText;