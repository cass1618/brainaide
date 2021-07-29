import React from "react";
import {withFirestore} from "react-redux-firebase";
import UploadToFirestore from "./UploadToFirestore";
import Api from "./Api";
import LoadingScreen from "./LoadingScreen";
import request from "request-promise";

class ApiFirestoreControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isLoading: false,
            anArray: ["url", "<html>"]
        }
    }

    handleAddingArrayToFirestore = () => {

    }

    handleMakingApiCall = (url) => {
        this.setState({isLoading: true});

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

        if(this.state.isLoading) {
            currentlyVisibleState = <LoadingScreen/>
        }

        else if(!this.state.isLoaded) {
            currentlyVisibleState = <Api makeApiCall = {this.handleMakingApiCall} />

        } else {
            currentlyVisibleState = <UploadToFirestore propsFromClass = {this.state.anArray} addArrayToFirestore = {this.handleAddingArrayToFirestore}/>
        }

        return (
            <React.Fragment>
            {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

export default withFirestore(ApiFirestoreControl);