import React from "react";
import PropTypes from "prop-types";
import HtmlFile from "./HtmlFile";
import {useSelector} from "react-redux";
import {useFirestoreConnect, isLoaded} from "react-redux-firebase";

function MainDisplay(props) {

    useFirestoreConnect([
        {collection: "htmlFiles"}
    ]);

    const htmlFiles = useSelector(state => state.firestore.ordered.htmlFiles);

    if(isLoaded(htmlFiles)) {
        return (
            <React.Fragment>
                <h1>MAIN DISPLAY PAGE</h1>

                {htmlFiles.map((htmlFile) => {
                    return (
                        <HtmlFile
                            url = {htmlFile.url}
                            fullText = {htmlFile.fullText}
                            id = {htmlFile.id}
                            key = {htmlFile.id}/>
                    )
                })}

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
    onClickingLoadUrl: PropTypes.func
}

export default MainDisplay;