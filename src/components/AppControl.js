import React from "react";
import FileDisplay from "./FileDisplay";
import FileList from "./FileList";
import HtmlFile from "./HtmlFile";
import {connect} from "react-redux";
import {withFirestore} from "react-redux-firebase";
import PropTypes from "prop-types";
import styles from "./../styles/code.module.css";

class AppControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            selectedStyle: null
        }
    }

    handleSelectingFile = (id) => {
        console.log("handleSelectingFile")

        this.props.firestore.get({collection: "htmlFiles", doc: id})
            // .then((htmlFile) => console.log(htmlFile.url))
            .then((htmlFile) => {

                const file = {
                    url: htmlFile.get("url"),
                    html: htmlFile.get("html"),
                    id: htmlFile.id
                }

                this.setState({selectedFile: file});
            });
    }

    handleClickingCode = () => {
        console.log("handleClickingCode")

        this.setState({selectedStyle: "code"});
    }

    render() {

        let currentlyVisibleState = null;

        if(this.state.selectedStyle === "code") {
            console.log("code if")
        currentlyVisibleState = 
        <div className={styles.code}><FileDisplay htmlFile = {this.state.selectedFile}/></div>
        } else if(this.state.selectedFile !== null) {
            currentlyVisibleState = <FileDisplay htmlFile = {this.state.selectedFile}/>
        }else {
            console.log("File List else")
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