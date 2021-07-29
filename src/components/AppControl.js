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
            parArray: null,
            parNumber: null,
        }
    }

    handleSelectingFile = (id) => {

        this.props.firestore.get({collection: "htmlFiles", doc: id})

            .then((htmlFile) => {

                const file = {
                    url: htmlFile.get("url"),
                    html: htmlFile.get("html"),
                    parArray: htmlFile.get("parArray"),
                    id: htmlFile.id
                }

                this.setState({selectedFile: file, selectedSection: file.parArray[0], parArray: file.parArray, parNumber: 0});
            });
    }

    handleKeyDown = (e) => {

        const {parNumber, parArray} = this.state

        if (e.keyCode === 40 && parNumber < parArray.length) {
            const newParNumber = parNumber +1;
            this.setState({parNumber: newParNumber,
            selectedSection: parArray[parNumber]
            })

        } else if (e.keyCode === 38 && parNumber >0) {
            const newParNumber = parNumber - 1;
            this.setState({parNumber: newParNumber,
            selectedSection: parArray[parNumber]
            })
        }
    }

    handleClickingCode = () => {
        this.setState({selectedStyle: "code"});
    }

    render() {

        let currentlyVisibleState = null;
        if (this.state.selectedFile === null) {
            currentlyVisibleState =
            <FileList onSelectingFile = {this.handleSelectingFile}/>
        

    } else if(this.state.selectedSection !== null) {
        document.addEventListener("keydown", this.handleKeyDown, false);
            currentlyVisibleState = <div className={styles.code}><Paragraph section = {this.state.selectedSection} onKeyDown = {this.handleKeyDown}/></div>
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
                {<button onClick = {this.handleClickingCode}>code</button>}
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}

export default withFirestore(AppControl);