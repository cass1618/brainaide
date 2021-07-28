import React from "react";
import FileDisplay from "./FileDisplay";
import FileList from "./FileList";
import {withFirestore} from "react-redux-firebase";
import styles from "./../styles/code.module.css";
import Paragraph from "./Paragraph";

class AppControl extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            selectedFile: null,
            selectedStyle: null,
            selectedSection: null,
            result: []
        }
    }

    handleSelectingFile = (id) => {
        console.log("handleSelectingFile")

        this.props.firestore.get({collection: "htmlFiles", doc: id})

            .then((htmlFile) => {

                const file = {
                    url: htmlFile.get("url"),
                    html: htmlFile.get("html"),
                    parArray: htmlFile.get("parArray"),
                    id: htmlFile.id
                }

                this.setState({selectedFile: file, selectedSection: file.parArray[0]});
            });
    }

    handleKeyDown = (e) => {
        console.log("KEY DOWN!  selectedSection: "+this.state.selectedSection)
        const {selectedSection, result, parArray} = this.state
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 125 && selectedSection > 0) {
            this.setState( prevState => ({
            selectedSection: parArray[prevState.selectedSection - 1]
            }))
        } else if (e.keyCode === 126 && selectedSection < result.length - 1) {
            this.setState( prevState => ({
            selectedSection: parArray[prevState.selectedSection + 1]
            }))
        }
    }

    handleClickingCode = () => {
        console.log("handleClickingCode")

        this.setState({selectedStyle: "code"});
    }

    render() {

        let currentlyVisibleState = null;
        console.log("SELECTED FILE: "+this.state.selectedFile)
        console.log("SELECTED SECTioN: "+this.state.selectedSection)
        if (this.state.selectedFile === null) {
            currentlyVisibleState =
            <FileList onSelectingFile = {this.handleSelectingFile}/>
        

    } else if(this.state.selectedSection !== null) {
        document.addEventListener("keydown", this.onKeyDown, false);
            currentlyVisibleState = <div><Paragraph section = {this.state.selectedSection} onKeyDown = {this.handleKeyDown}/></div>
        }

        else if(this.state.selectedStyle === "code") {

        currentlyVisibleState = 
        <div className={styles.code}><FileDisplay htmlFile = {this.state.selectedFile}/></div>
        } else if(this.state.selectedFile !== null) {
            currentlyVisibleState = <FileDisplay htmlFile = {this.state.selectedFile}/>
        }else {

        currentlyVisibleState =
        <FileList onSelectingFile = {this.handleSelectingFile}/>
        }
    
        return (
            <React.Fragment>
                {console.log("selectedFile "+this.state.selectedFile)}
                {<button onClick = {this.handleClickingCode}>code</button>}
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}

export default withFirestore(AppControl);