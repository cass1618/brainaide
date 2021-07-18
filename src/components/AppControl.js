import React from "react";
// import UrlForm from "./UrlForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
// import DisplayText from "./DisplayText";
import request from "request-promise";
import {Markup} from "interweave";

class AppControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            rawHtml: "empty"
        };
    };

    makeApiCall = () => {
 
        request(`http://api.scraperapi.com?api_key=${process.env.REACT_APP_API_KEY}&url=https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/using-node-in-the-command-line&render=true&autoparse=true&country_code=us`)

        .then(response => {
            this.setState({
                isLoaded: true,
                rawHtml: response
            });
        })
        .catch(error => {
        console.log(error)
        })
      }

    componentDidMount() {
        this.makeApiCall()
    }

    handleLoadingUrl = (url) => {
        const {dispatch} = this.props;
        const action = a.loadUrl(url);
        dispatch(action);
    }

    // render() {

    //     let currentlyVisibleState = null;

        // const {error, isLoaded, rawhtml} = this.state;

        // if(error) {
        //     return (
        //         <React.Fragment>
        //             ERROR: {error.message}
        //         </React.Fragment>
        //     )
        // } else if (!isLoaded) {
        //     return (
        //         <React.Fragment>
        //             LOADING . . .
        //         </React.Fragment>
        //         )
        // } else {
        //     return (
        //         <React.Fragment>
        //             <h1>RAW HTML</h1>
        //             <p>{rawhtml}</p>
        //         </React.Fragment>
        //     )
        // }

        // if(this.props.formVisibleOnPage) {

        // } else {
        //     currentlyVisibleState = 
        //         <DisplayText
        //             displayText = {this.props.allSections}/>
        // }
        
        // return (

        //     // <React.Fragment>
        //     //     <UrlForm
        //     //         onLoadingUrl = {this.handleLoadingUrl}/>
        //     //     {currentlyVisibleState}
        //     //     {/* <button onClick = {this.handleClick}>BUTTON</button> */}
        //     // </React.Fragment>
    //     // )
    // }

    render() {
        const { error, isLoaded, rawHtml } = this.state;
        if (error) {
            return <React.Fragment>Error: {error.message}</React.Fragment>;
        } else if (!isLoaded) {
            return <React.Fragment>Loading...</React.Fragment>;
        } else {
            const body = rawHtml.split("<body>")[1]
            console.log(body);
            return (
                <React.Fragment>
                <h1>rawHtml</h1>
                        <Markup content={body}/>
                </React.Fragment>
            );
        }
      }

}

AppControl.propTypes = {
    allSections: PropTypes.object,
    formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        allSections: state.allSections,
        formVisibleOnPage: state.formVisibleOnPage
    }
}

AppControl = connect(mapStateToProps)(AppControl);

export default AppControl;