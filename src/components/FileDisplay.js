import React from "react";
import PropTypes from "prop-types";
import {Markup} from "interweave";
import "./../styles/FileDisplay.css";

function FileDisplay(props) {

    console.log("FILE DISPLAY VISIBLE")
    
    const {htmlFile} = props;
    let body = "body-default";


var ReactDOMServer = require('react-dom/server');
var HtmlToReact = require('html-to-react');
var HtmlToReactParser = require('html-to-react').Parser;

var htmlInput = htmlFile.html;


var isValidNode = function () {
  return true;
};

// Order matters. Instructions are processed in the order they're defined
var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
var processingInstructions = [
    {
    // Custom <h1> processing
        shouldProcessNode: function (node) {
          return node.parent && node.parent.name && node.parent.name === 'table';
        },
        processNode: function (node, children) {
          return null;
        }
    },
    {
        // Anything else
        shouldProcessNode: function (node) {
          return true;
        },
    processNode: processNodeDefinitions.processDefaultNode
    }
];
var htmlToReactParser = new HtmlToReactParser();
var reactComponent = htmlToReactParser.parseWithInstructions(htmlInput, isValidNode, processingInstructions);
var reactHtml = ReactDOMServer.renderToStaticMarkup(reactComponent);


    if(reactHtml.includes("<body>")) {
    body = reactHtml.split("<body>")[1]

    } else {
        const array = reactHtml.split("<title>")

        // body = "<title>" + array[1]
        body = array[1]
    }

    const parArray = body.split("<p>")
    console.log(parArray)

    // const newParArray = parArray.forEach(element => {
    //   count++;
    //   return "<p className=par"+count+">" +element;
    // })

    let parClassString ="";

    for(let i = 0; i < parArray.length; i++) {
        parClassString = parClassString.concat('<p class="par'+(i % 20)+'">'+parArray[i-1]);
    }

    return (
        <React.Fragment>
            <div>
                <h1>FILE DISPLAY</h1>
                <Markup content={parClassString}/>
                {parClassString}
            </div>
        </React.Fragment>
    );
}

FileDisplay.propTypes = {
    htmlFile: PropTypes.object
}

export default FileDisplay;