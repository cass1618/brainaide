import React from "react";
import PropTypes from "prop-types";
import HtmlFile from "./HtmlFile";
import {useSelector} from "react-redux";
import {useFirestoreConnect, isLoaded} from "react-redux-firebase";
import "./../styles/FileList.css"

function FileList(props) {

    useFirestoreConnect([
        {collection: "htmlFiles"}
    ])

    const htmlFiles = useSelector(state => state.firestore.ordered.htmlFiles);

    if(isLoaded(htmlFiles)) {
        return (
        
            <React.Fragment>
                <div className = "fileList">
                    {htmlFiles.map((htmlFile) => {
                        return  (
                            <HtmlFile
                                whenUrlClicked = {props.onSelectingFile}
                                url = {htmlFile.url}
                                id = {htmlFile.id}
                                key = {htmlFile.id}/>
                        ) 
                    })}
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className = "fileList">
                    <h3>LOADING</h3>
                </div>
            </React.Fragment>
        )
    }
}

FileList.propTypes = {
    onSelectingFile: PropTypes.func
};

export default FileList;