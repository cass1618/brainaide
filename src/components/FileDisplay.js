import React from "react";
import PropTypes from "prop-types";
import {Markup} from "interweave";
import "./../styles/FileDisplay.css";

function FileDisplay(props) {

    console.log("FILE DISPLAY VISIBLE")
    
    const {htmlFile} = props;
    let body = "body-default";

    if(htmlFile.html.includes("<body>")) {
    body = htmlFile.html.split("<body>")[1]
    console.log("split at body")
    } else {
        const array = htmlFile.html.split("<title>")
        console.log("split at title.  array[0]="+array[0])
        body = "<title>" + array[1]
    }
    // console.log(body);

    return (
        <React.Fragment>
            <div>
                <h1>FILE DISPLAY</h1>
                {/* <Markup content={body}/> */}
                {body}
            </div>
        </React.Fragment>
    );
}

FileDisplay.propTypes = {
    htmlFile: PropTypes.object
}

export default FileDisplay;