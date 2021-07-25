import React from "react";
import {withFirestore} from "react-redux-firebase";
import UploadToFirestore from "./UploadToFirestore";
import Api from "./Api";
import request from "request-promise";

class UploadFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            anArray: ["url", "<html>"]
        }
    }

    handleAddingArrayToFirestore = () => {
        console.log("handleAddingArrayToFirestore");
    }

    handleMakingApiCall = (url) => {
        console.log("handleMakingApiCall");

        request(`http://api.scraperapi.com?api_key=${process.env.REACT_APP_API_KEY}&url=${url}&render=true&autoparse=true&country_code=us`)
        // .then(response => console.log(response))
        .then(response => {
            this.setState({
                isLoaded: true,
                anArray: [url, response]
            });
        })
        .catch(error => {
        console.log(error)
        })
    }

    render() {
        let currentlyVisibleState = null;
        console.log("this.state.isLoaded "+this.state.isLoaded)

        if(!this.state.isLoaded) {
            currentlyVisibleState = <Api makeApiCall = {this.handleMakingApiCall} />

        } else {
            console.log(this.state.anArray)
            currentlyVisibleState = <UploadToFirestore makeApiCall = {this.handleMakingApiCall} propsFromClass = {this.state.anArray} addArrayToFirestore = {this.handleAddingArrayToFirestore}/>
        }

        return (
            <React.Fragment>
            {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

export default withFirestore(UploadFile);