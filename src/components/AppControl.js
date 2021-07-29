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
            sectionArray: null,
            parNumber: 0,
            randomStyle: "z",
            splashPageVisible: true
        }
    }

    handleSelectingFile = (id) => {

        this.props.firestore.get({collection: "htmlFiles", doc: id})

            .then((htmlFile) => {

                const file = {
                    url: htmlFile.get("url"),
                    html: htmlFile.get("html"),
                    sectionArray: htmlFile.get("sectionArray"),
                    id: htmlFile.id
                }

                this.setState({selectedFile: file, selectedSection: file.sectionArray[0], sectionArray: file.sectionArray, parNumber: 0});
            });
    }

    handleKeyDown = (e) => {

        
        const {parNumber, sectionArray} = this.state
        console.log("beg. par#: "+parNumber)
        //Select random style from a(97) to z(122)
        const currentStyle = this.state.randomStyle;
        console.log("CURRENT STYLE: "+currentStyle)

        let nextStyle;
        let prevStyle;
        if(currentStyle === "z") {
            nextStyle = "a";
            console.log("nextSTyle: "+nextStyle)
        } else {
            nextStyle = String.fromCharCode(currentStyle.charCodeAt()+1)
            console.log("nextSTyle: "+nextStyle)
        }

        if(currentStyle === "a") {
            prevStyle = "z";
            console.log("prevSTyle: "+prevStyle)
        } else {
            prevStyle = String.fromCharCode(currentStyle.charCodeAt()-1)
            console.log("prevSTyle: "+prevStyle)
        }

        const randomStyle = String.fromCharCode(Math.ceil(Math.random() * 26)+96);

        if (e.keyCode === 40 && parNumber < sectionArray.length) {
            const newParNumber = parNumber +1;
            console.log("UP newParNum: "+newParNumber)
            this.setState({parNumber: newParNumber,
            selectedSection: sectionArray[parNumber], 
            randomStyle: randomStyle
            });

        } else if (e.keyCode === 38 && parNumber > 0) {
            const newParNumber = parNumber - 1;
            console.log("UP newParNum: "+newParNumber)
            this.setState({parNumber: newParNumber,
            selectedSection: sectionArray[parNumber], 
            randomStyle: randomStyle
            });

        } else if (e.keyCode === 37) {
            this.setState({randomStyle: prevStyle});

        } else if (e.keyCode === 39) {
            this.setState({randomStyle: nextStyle});
        }
    }

    handleClickingCode = () => {
        this.setState({selectedStyle: "code"});
    }

    render() {

        let currentlyVisibleState = null;

        if(this.state.splashPageVisible) {
            currentlyVisibleState = 
                <div class="splash">
                    <h2>WElCOME TO BRAINAIDE! The goal is to provide your brain with something interesting to keep it occupied so that it doesn't wander off!</h2>
                    <h3>First upload the URL of a page you would like to read.</h3>
                    <h3>This site is optimized for learnhowtoprogram.com but will also work with other pages you might need to read.</h3>
                    <h3>Select the page you'd like to read from the list and then select a view!</h3>
                </div>
        
        } else if(this.state.selectedFile === null) {
            currentlyVisibleState =
            <FileList onSelectingFile = {this.handleSelectingFile}/>

        } else if(this.state.selectedFile !== null && this.state.selectedFile === null) {
            currentlyVisibleState = 
            <div>
                <FileDisplay htmlFile = {this.state.selectedFile}/>
                <button onClick = {this.handleClickingCode}>CODE</button>
                <button onClick = {this.handleClickingLineByLine}>LINE-BY-LINE</button>
            </div>

        } else if(this.state.selectedSection !== null && this.state.selectedStyle === "line-by-line") {
            document.addEventListener("keydown", this.handleKeyDown, false);
            currentlyVisibleState = <div><Paragraph section = {this.state.selectedSection} randomStyle = {this.state.randomStyle} onKeyDown = {this.handleKeyDown}/></div>
        }

        else if(this.state.selectedSection !== null && this.state.selectedStyle === "code") {
            currentlyVisibleState = 
            <div className={styles.code}><FileDisplay htmlFile = {this.state.selectedFile}/></div>

        }else {
            currentlyVisibleState = <h1>SOMETHING WENT WRONG</h1>
        }
    
        return (
            <React.Fragment>
                {/* {<button onClick = {this.handleClickingCode}>code</button>} */}
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}

export default withFirestore(AppControl);