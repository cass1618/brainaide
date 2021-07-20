import React from "react";
import PropTypes from "prop-types";
import HtmlFile from "./HtmlFile";
import {useSelector} from "react-redux";
import {useFirestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";

function MainDisplay(props) {

    useFirestoreConnect([
        {collection: "urls"}
    ]);

    const urls = useSelector(state => state.firestore.ordered.urls);

    if(isLoaded(urls)) {
        return (
            <React.Fragment>
                <h1>MAIN DISPLAY PAGE</h1>

                {Object.values(props.htmlFileList).map((htmlFile) => 
                    <HtmlFile
                    url = {htmlFile.url}
                    fullText = {htmlFile.fullText}
                    id = {htmlFile.id}
                    key = {htmlFile.id}/>
                )}

                <button onClick = {props.onClickingLoadUrl}>Add URL</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1>LOADING...</h1>
            </React.Fragment>
        )
    }
}

MainDisplay.propTypes = {
    // htmlFileList: PropTypes.object,
    onClickingLoadUrl: PropTypes.func
}

export default MainDisplay;