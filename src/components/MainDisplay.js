import React from "react";
import PropTypes from "prop-types";
import HtmlFile from "./HtmlFile";

function MainDisplay(props) {

    return (
        <React.Fragment>
            <h1>MAIN DISPLAY PAGE</h1>

            {Object.values(props.htmlFileList).map((htmlFile) => 
                <HtmlFile
                url = {htmlFile.url}
                id = {htmlFile.id}
                key = {htmlFile.id}/>
            )}

            <button onClick = {props.onClickingLoadUrl}>Add URL</button>
        </React.Fragment>
    );
}

MainDisplay.propTypes = {
    htmlFileList: PropTypes.object,
    onClickingLoadUrl: PropTypes.func
}

export default MainDisplay;