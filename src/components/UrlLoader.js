import React from "react";
import UrlForm from "./UrlForm";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {makeApiCall} from "./../actions";
import {Markup} from "interweave";
import * as a from './../actions';
import {withFirestore} from "react-redux-firebase";
import AppControl from "./AppControl";
import MainDisplay from "./MainDisplay";

class UrlLoader extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                currentUrl: null,
                loadingUrl: true,
            }
    }

    handleAddingUrlToList = () => {
        this.setState({
            loadingUrl: false,
        })
        //Sets state of parent AppControl component
        this.props.setUrlFormVisibleToFalse();
    }

    render() {
        let currentlyVisibleState = null;

        if(this.state.loadingUrl) {
            currentlyVisibleState = <UrlForm onLoadingUrl = {this.handleAddingUrlToList}/>
        } 
        else {
            currentlyVisibleState = null;
        }

            return (
                <React.Fragment>
                    <h1>URL LOADER RETURN 2</h1>
                    {currentlyVisibleState}
                </React.Fragment>
            )
    }



    // constructor(props) {
    //     super(props);
    //         this.state = {
    //             currentUrl: null,
    //             loadingUrl: false,
    //             urlFormVisible: false
    //         }
    // }

    // //call this function after the api call has been made and the text is stored in the object
    // handleUrlInput = () => {
    //     console.log("handleUrlInput")
    //     // this.setState({
    //     //     currentUrl: "https://en.wikipedia.org/wiki/Cat",
    //     //     urlFormVisible: false
    //     // })
    // }


    // handleAddingUrlToList = () => {
    //     this.setState({
    //         urlFormVisible: false
    //     })
    // }

    // handleMakeAnApiCallTest = () => {
    //     console.log("makeAnApiCallTest has been called")
    // }


    // handleAddingUrlToList = () => {
    //     this.setState({
    //         urlFormVisible: false
    //     })
    // }

    // render() {

    //     let currentlyVisibleState = null;


    //     if(this.state.urlFormVisible) {
    //         currentlyVisibleState = <UrlForm onLoadingUrl = {this.handleAddingUrlToList}/>

    //     // if(this.state.currentUrl === null) {
    //     // currentlyVisibleState = <UrlForm onLoadingUrl = {this.handleUrlInput}/>
    //     } else {
    //         currentlyVisibleState = <UrlForm makeAnApiCallTest = {this.handleMakeAnApiCallTest}/>
    //     }


    //     return(
    //     <React.Fragment>
    //         {currentlyVisibleState}
    //     return "this is what UrlLoader will return";
    //     </React.Fragment>
    //     //Should return an htmlFile
    //     )
    // }

    // componentDidMount() {
    //     const {dispatch} = this.props;
    //     dispatch(makeApiCall());
    // }

    // render() {

    //     const {htmlFile} = this.props;
    //     console.log("isLoading: "+htmlFile.isLoading)
    //     console.log("htmlFile: "+htmlFile.htmlFile)

    //     if (htmlFile.error) {
    //         return <React.Fragment>Error: {htmlFile.error.message}</React.Fragment>;

    //     } else if (htmlFile.isLoading) {
    //         console.log("isLoading")
    //         return <React.Fragment>Loading...</React.Fragment>;

    //     } else {
    //         const body = htmlFile.htmlFile.split("<body>")[1]

    //         return (
                
    //             <React.Fragment>
    //                 <Markup content={body}/>
    //             </React.Fragment>
    //         );
    //     }
    // }
}

UrlLoader.propTypes = {
    // storedHtmlFileList: PropTypes.object,
    urlFormVisible: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        // htmlFile: state.htmlFile,
        // isLoading: state.isLoading,
        // error: state.error,
        urlFormVisible: state.urlFormVisible
    }
}

UrlLoader = connect(mapStateToProps)(UrlLoader);

export default UrlLoader;