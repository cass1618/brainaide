import React from "react";
import {useFirestore} from "react-redux-firebase"

function UploadToFirestore(props) {

    const firestore = useFirestore();
    const url = props.propsFromClass[0];
    const fullText = props.propsFromClass[1];

    
    function SeparateSections() {

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
    
        //Extract the body of the html by splitting at starting and closing tags
        if(reactHtml.includes("<body>")) {
        body = reactHtml.split("<body>")[1]
        body = reactHtml.split("</body")[0]
        //If there is no body tag it will split at the title
        } else {
            const array = reactHtml.split("<title>")
            body = array[1]
        }
    
        //Split into array at <p> tags
        const splitOpeningPTag = body.split("<p>");
        //For each element in the array, split at </p>
        //Take the 0 element to obtain what is between <p> and </p>
        let parArray = [];
        for(let i = 1; i<splitOpeningPTag.length; i++) {
            parArray.push(splitOpeningPTag[i].split("</p>")[0]);
        }
        
        //New array will contain split up elements if they are several sentences
        let sectionArray = [];

        //Determine if element has more than 2 sentences
        for(let i = 0; i < parArray.length; i++) {
            const currentString = parArray[i];
            //start counter at 1 because most likely the last char is a period with no space after it so it won't get counted
            let numberOfSentences = 1;
    
            //iterate through each character in the ith string
            for(let j=0; j< currentString.length; j++) {
                //Count periods that have a space after to indicate end of sentence
                if(currentString[j] === "." && currentString[j+1] === " ") {
                    numberOfSentences++;
                }
            }

            if(numberOfSentences > 2) {
                const splitString = currentString.split(".")

                //Add each individual sentence to the section array
                for(let i = 0; i < splitString.length; i++) {
                sectionArray.push(splitString[i]);
                }
            } else {
                //Push the original string if it did not get split
                sectionArray.push(currentString)
            }
        }
        //The array ends up with some empty strings so remove them
        for(let i = 0; i < sectionArray.length; i++) {
            if(sectionArray[i] === "" || sectionArray[i] === " ") {
                sectionArray.splice(i, 1)
            }
        }

        return sectionArray;
    }
    function addFileToFirestore(e) { 
        
        e.preventDefault();

        props.addArrayToFirestore();

        const sectionArray = SeparateSections(fullText);

        return firestore.collection("htmlFiles").add(
            {
                url: url,
                html: fullText,
                sectionArray: sectionArray,
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