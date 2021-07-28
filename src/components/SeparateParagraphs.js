import React from "react";
import PropTypes from "prop-types";
import {Markup} from "interweave";
import "./../styles/SeparateParagraphs.css";

function SeparateParagraphs(props) {

    console.log("SEPARATE PARS VISIBLE")
    
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
        body = array[1]
    }

    const array = body.split("<p>");
    let parArray = [];
    for(let i = 1; i<array.length; i++) {
        parArray.push("<p>" + array[i].split("</p>") + "</p>");
    }

    for(let i =0; i<parArray.length; i++) {
    console.log("parArray["+i+"]: "+parArray[i])
    }

    let parString = "<p>" + parArray[5] + "</p>"
    console.log("PAR STRING IS: "+parString)

    return (
        {parArray}
        // <React.Fragment>
        //     <div>
        //         <h1>SEPARATE PARS DISPLAY</h1>
        //         <Markup content={parString}/>
        //         {/* {this.state.selectedSection} */}
        //     </div>
        // </React.Fragment>
    );
}

SeparateParagraphs.propTypes = {
    htmlFile: PropTypes.object,
    selectedSection: PropTypes.string
}

export default SeparateParagraphs;