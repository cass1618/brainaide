import React from "react";
import {withFirestore} from "react-redux-firebase";
import UploadToFirestore from "./UploadToFirestore";
import Api from "./Api";
import request from "request-promise";

class ApiFirestoreControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            anArray: ["url", "<html>"]
        }
    }

    handleAddingArrayToFirestore = () => {

    }

    handleMakingApiCall = (url) => {

        request(`https://api.scraperapi.com?api_key=${process.env.REACT_APP_API_KEY}&url=${url}&render=true&autoparse=true&country_code=us`)

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

        if(!this.state.isLoaded) {
            currentlyVisibleState = <Api makeApiCall = {this.handleMakingApiCall} />

        } else {
            currentlyVisibleState = <UploadToFirestore makeApiCall = {this.handleMakingApiCall} propsFromClass = {this.state.anArray} addArrayToFirestore = {this.handleAddingArrayToFirestore}/>
        }

        return (
            <React.Fragment>
            {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

export default withFirestore(ApiFirestoreControl);