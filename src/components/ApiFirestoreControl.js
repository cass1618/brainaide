import React from "react";
import {withFirestore} from "react-redux-firebase";
import UploadToFirestore from "./UploadToFirestore";
import Api from "./Api";
import AppControl from "./AppControl"
import LoadingScreen from "./LoadingScreen";
import request from "request-promise";

class ApiFirestoreControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isLoading: false,
            gameOver: false,
            anArray: ["url", "<html>"]
        }
    }

    handleAddingArrayToFirestore = () => {
        this.setState({gameOver: true});
    }

    handleMakingApiCall = (url) => {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({gameOver: true});
        }, 60000);

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

        if(this.state.gameOver) {
            currentlyVisibleState = <AppControl/>
        }

        else if(this.state.isLoaded) {
            currentlyVisibleState = <div><UploadToFirestore propsFromClass = {this.state.anArray} addArrayToFirestore = {this.handleAddingArrayToFirestore}/><LoadingScreen/></div>
        }
        
        else if(this.state.isLoading) {
            currentlyVisibleState = <div><h1>THIS API TAKES FOREVER SO HERE'S A GAME WHILE YOU WAIT!</h1><LoadingScreen/></div>
        }

        else if(!this.state.isLoaded) {
            currentlyVisibleState = <Api makeApiCall = {this.handleMakingApiCall}/>

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