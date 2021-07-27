import React from "react";
import PropTypes from "prop-types";
import {Markup} from "interweave";
import "./../styles/FileDisplay.css";

function FileDisplay(props) {

    console.log("FILE DISPLAY VISIBLE")
    
    const {htmlFile} = props;
    let body = "body-default";

    const ReactDOMServer = require('react-dom/server');
    const HtmlToReact = require('html-to-react').Parser;
    const React = require("react");

    const validNode = function() {
        return true;
    }

    var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    const processingInstructions = [
        {
            replaceChildren: true,
            shouldProcessNode: function(node) {
                return node.parent && node.parent.name && node.parent.name === "tbody";
            },
            processNode: function (node, children) {
                return node.data.toUpperCase();
            }
        },
        {
            shouldProcessNode: function(node) {
                return true;
            },
            processNode: processNodeDefinitions.processDefaultNode,
        }
    ];

    // const htmlInput = '<div><h1>Title</h1><p>A paragraph</p></div>';
    const htmlInput = htmlFile.html;
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parseWithInstructions(htmlInput, validNode, processingInstructions);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

    console.log(reactHtml)

    


    if(reactHtml.includes("<body>")) {
    body = reactHtml.split("<body>")[1]
    console.log("split at body")
    } else {
        const array = reactHtml.split("<title>")
        console.log("split at title.  array[0]="+array[0])
        // body = "<title>" + array[1]
        body = array[1]
    }
    console.log(body);

    return (
        <React.Fragment>
            <div>
                <h1>FILE DISPLAY</h1>
                <Markup content={body}/>
                {body}
            </div>
        </React.Fragment>
    );
}

FileDisplay.propTypes = {
    htmlFile: PropTypes.object
}

export default FileDisplay;