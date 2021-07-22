import React from "react";
// import * as a from './../actions';
import {withFirestore} from "react-redux-firebase";
import FirestoreFunctional from "./FirestoreFunctional";
import request from "request-promise";

class FirestoreClass extends React.Component {

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

    //Props.state should have the response stored => send it to functional component
    handleMakingApiCall = () => {
        console.log("handleMakingApiCall");
        const url = "https://en.wikipedia.org/wiki/Cognitive_neuroscience"

        request(`http://api.scraperapi.com?api_key=${process.env.REACT_APP_API_KEY}&url=${url}&render=true&autoparse=true&country_code=us`)
        // .then(response => console.log(response))
        .then(response => {
            this.setState({
                isLoaded: true,
                anArray: ["url", response]
            });
        }).then((html)=> console.log(html))
        .catch(error => {
        console.log(error)
        })
    }

    render() {
        let currentlyVisibleState = null;
        console.log("this.state.anArray "+this.state.anArray)

        //Will accept user input from functional component

        //Can I put a function prior to send props over?
        //Will send the array to the functional component
        currentlyVisibleState = <FirestoreFunctional makeApiCall = {this.handleMakingApiCall} propsFromClass = {this.state.anArray} addArrayToFirestore = {this.handleAddingArrayToFirestore}/>

        return (
            <React.Fragment>
                <div>return from Class</div>
            {currentlyVisibleState}
            </React.Fragment>
        )
    }

}

export default withFirestore(FirestoreClass);