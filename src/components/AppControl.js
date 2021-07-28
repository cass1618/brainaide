import React from "react";
import FileDisplay from "./FileDisplay";
import FileList from "./FileList";
import HtmlFile from "./HtmlFile";
import {connect} from "react-redux";
import {withFirestore} from "react-redux-firebase";
import PropTypes from "prop-types";
import styles from "./../styles/code.module.css";
import SeparateParagraphs from "./SeparateParagraphs";

class AppControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            selectedStyle: null,
            selectedSection: "not null",
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
                    id: htmlFile.id
                }

                this.setState({selectedFile: file});
            });
    }

    handleKeyDown(e) {
        const {selectedSection, result} = this.state
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38 && selectedSection > 0) {
            this.setState( prevState => ({
            selectedSection: prevState.selectedSection - 1
            }))
        } else if (e.keyCode === 40 && selectedSection < result.length - 1) {
            this.setState( prevState => ({
            selectedSection: prevState.selectedSection + 1
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
        if (this.state.selectedFile === null) {
            currentlyVisibleState =
            <FileList onSelectingFile = {this.handleSelectingFile}/>
        

    } else if(this.state.selectedSection !== null) {
            currentlyVisibleState = <SeparateParagraphs htmlFile = {this.state.selectedFile} section = {this.state.selectedSection} onKeyDown = {this.handleKeyDown}/>
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