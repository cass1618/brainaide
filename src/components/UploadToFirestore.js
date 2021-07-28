import React from "react";
import {useFirestore} from "react-redux-firebase"

function UploadToFirestore(props) {

    const firestore = useFirestore();
    const url = props.propsFromClass[0];
    const fullText = props.propsFromClass[1];

    
    function SeparateParagraphs() {

        let body = "body-default";
    
    
    var ReactDOMServer = require('react-dom/server');
    var HtmlToReact = require('html-to-react');
    var HtmlToReactParser = require('html-to-react').Parser;
    
    var htmlInput = fullText;
    
    
    var isValidNode = function () {
        return true;
    };
    
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
            parArray.push("" + array[i].split("</p>") + "");
        }

        return parArray;
    }
    
    function addFileToFirestore(e) { 
        
        e.preventDefault();

        props.addArrayToFirestore();

        const parArray = SeparateParagraphs(fullText);

        return firestore.collection("htmlFiles").add(
            {
                url: url,
                html: fullText,
                parArray: parArray,
                timeOpen: firestore.FieldValue.serverTimestamp()
            }
        );
    }
        
    return (
        <React.Fragment>

            {/* I couldn't figure out any other way to call the function other than putting it inside a button */}
            <form onSubmit={addFileToFirestore}>
                <button type="submit">ADD TO FIRESTORE</button>
            </form>

        </React.Fragment>
    )
}

export default UploadToFirestore;