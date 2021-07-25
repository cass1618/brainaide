import React from "react";
import PropTypes from "prop-types";
import HtmlFile from "./HtmlFile";
import {useSelector} from "react-redux";
import {useFirestoreConnect, isLoaded} from "react-redux-firebase";

function FileList(props) {

    useFirestoreConnect([
        {collection: "htmlFiles"}
    ])

    const htmlFiles = useSelector(state => state.firestore.ordered.htmlFiles);
    console.log(htmlFiles)

    if(isLoaded(htmlFiles)) {
        return (
        
            <React.Fragment>

                {htmlFiles.map((htmlFile) => {
                    return  (
                        <HtmlFile
                            whenUrlClicked = {props.onClickingUrl}
                            url = {htmlFile.url}
                            id = {htmlFile.id}
                            key = {htmlFile.id}/>
                    ) 
                })}

            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h3>LOADING</h3>
            </React.Fragment>
        )
    }
}

FileList.propTypes = {
    onClickingUrl: PropTypes.func
};

export default FileList;