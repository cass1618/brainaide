import React from "react";
import PropTypes from "prop-types";
import {Markup} from "interweave";
import "./../styles/SeparateParagraphs.css";

function SeparateParagraphs(props) {

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
        parArray.push(array[i].split("</p>"));
    }
    console.log("par array after first loop: "+parArray);

    let sectionArray = [];
    //for each element in parArray, check if it has more than 2 sentences
    for(let i = 0; i<parArray.length; i++) {
        //Count number of periods in parArray[i]
        let counter = 0;
        for(let j = 0; j < parArray[i].length - 1; j++) {
            if(parArray[i][j]==="." && parArray[i][j+1]===".") {
                console.log("period")
                counter++;
            }
        }
        if (counter > 2) {
            console.log(">2 periods")
            sectionArray.push()
        }
    }

    return (
        {parArray}
    );
}

SeparateParagraphs.propTypes = {
    htmlFile: PropTypes.object,
    selectedSection: PropTypes.string
}

export default SeparateParagraphs;