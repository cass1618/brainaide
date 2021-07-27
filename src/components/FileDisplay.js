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
var reactComponent = htmlToReactParser.parseWithInstructions(htmlInput, isValidNode,
  processingInstructions);
var reactHtml = ReactDOMServer.renderToStaticMarkup(reactComponent);



    // const ReactDOMServer = require('react-dom/server');
    // const HtmlToReact = require('html-to-react').Parser;

    // const validNode = function() {
    //     return true;
    // }

    // var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    // const processingInstructions = [
    //     {
    //         replaceChildren: true,
    //         shouldProcessNode: function(node) {
    //             return node.parent && node.parent.name && node.parent.name === "tbody";
    //         },
    //         processNode: function (node, children) {
    //             return node.data.toUpperCase();
    //         }
    //     },
    //     {
    //         shouldProcessNode: function(node) {
    //             return true;
    //         },
    //         processNode: processNodeDefinitions.processDefaultNode,
    //     }
    // ];

    // const htmlInput = '<div><h1>Title</h1><p>A paragraph</p></div>';
    // const htmlInput = htmlFile.html;
    // const htmlToReact = new HtmlToReact();
    // const reactElement = htmlToReact.parseWithInstructions(htmlInput, validNode, processingInstructions);
    // const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

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