import React from "react";
import FileDisplay from "./FileDisplay";
import FileList from "./FileList";
import {withFirestore} from "react-redux-firebase";
import styles from "./../styles/code.module.css";
import "./../styles/AppControl.css"
import background from "./../images/splash.jpeg"
import Paragraph from "./Paragraph";
import ApiFirestoreControl from "./ApiFirestoreControl";
import {Wave} from "react-animated-text";

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
            splashPageVisible: true,
            uploading: false
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
        //Select random style from a(97) to z(122)
        const currentStyle = this.state.randomStyle;

        let nextStyle;
        let prevStyle;
        if(currentStyle === "z") {
            nextStyle = "a";

        } else {
            nextStyle = String.fromCharCode(currentStyle.charCodeAt()+1)
        }

        if(currentStyle === "a") {
            prevStyle = "z";

        } else {
            prevStyle = String.fromCharCode(currentStyle.charCodeAt()-1)
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

    handleClickingEnter = () => {
        this.setState({splashPageVisible: false});
    }

    handleClickingCode = () => {
        this.setState({selectedStyle: "code"});
    }

    handleClickingLineByLine = () => {
        this.setState({selectedStyle: "lineByLine"});
    }

    handleClickingUploadFile = () => {
        this.setState({uploading: true})
    }

    handleEndLoading = () => {
        this.setState({uploading: false})
    }

    render() {

        let currentlyVisibleState = null;

        if(this.state.splashPageVisible) {
            currentlyVisibleState = 
                <div className = "splash" style={{backgroundImage: `url(${background})`}}>
                    <div className = "wave">
                        <Wave 
                            text="WELCOME TO BRAINAIDE" 
                            effect="pop" 
                            effectChange={.2}
                            effectDuration={.5}/>
                    </div>
                    <div className = "wave2">
                        <Wave 
                            text="designed to entertain your prefrontal cortex so it doesn't try to distract you or wander off" 
                            effect="stretch" 
                            effectChange={2}
                            effectDuration={.5}/>
                    </div>

                    <button className = "enter" onClick = {this.handleClickingEnter}>ENTER!</button>
                </div>
        
        } else if(this.state.uploading) {
            currentlyVisibleState = <ApiFirestoreControl onGameOver = {this.handleEndLoading}/>

        } else if(this.state.selectedFile === null) {
            currentlyVisibleState =
            <div>
                <button className = "upload" onClick = {this.handleClickingUploadFile}>UPLOAD FILE</button>
                <FileList onSelectingFile = {this.handleSelectingFile}/>
            </div>

        } else if(this.state.selectedFile !== null && this.state.selectedStyle === null) {
            currentlyVisibleState = 
            <div>
                <button onClick = {this.handleClickingCode}>CODE</button>
                <button onClick = {this.handleClickingLineByLine}>LINE-BY-LINE</button>
                <FileDisplay htmlFile = {this.state.selectedFile}/>
            </div>

        } else if(this.state.selectedSection !== null && this.state.selectedStyle === "lineByLine") {
            document.addEventListener("keydown", this.handleKeyDown, false);
            currentlyVisibleState = <div><Paragraph section = {this.state.selectedSection} randomStyle = {this.state.randomStyle} onKeyDown = {this.handleKeyDown}/></div>
        }

        else if(this.state.selectedSection !== null && this.state.selectedStyle === "code") {
            currentlyVisibleState = 
            <div className={styles.code}><FileDisplay htmlFile = {this.state.selectedFile}/></div>

        } else {
            currentlyVisibleState = <h1>SOMETHING WENT WRONG</h1>
        }
    
        return (
            <React.Fragment>
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}

export default withFirestore(AppControl);