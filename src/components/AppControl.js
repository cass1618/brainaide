import React from "react";
import UrlForm from "./UrlForm";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
// import * as a from './../actions';
// import DisplayText from "./DisplayText";
// import request from "request-promise";
import {makeApiCall} from "./../actions";
import {Markup} from "interweave";

class AppControl extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     isLoading: false,
    //     //     rawHtml: "empty",
    //     //     error: null
    //     // };
    // };

    // makeApiCall = (url) => {
 
    //     request(`http://api.scraperapi.com?api_key=${process.env.REACT_APP_API_KEY}&url=${url}&render=true&autoparse=true&country_code=us`)

    //     .then(response => {
    //         this.setState({
    //             isLoaded: true,
    //             rawHtml: response
    //         });
    //     })
    //     .catch(error => {
    //     console.log(error)
    //     })
    // }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(makeApiCall());
    }

    // handleLoadingUrl = (url) => {
    //     const {dispatch} = this.props;
    //     const action = a.loadUrl(url);
    //     dispatch(action);
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
        let currentlyVisibleState = null;

        // if(this.props.formVisibleOnPage) {
            currentlyVisibleState = 
            <UrlForm onLoadingUrl = {this.makeApiCall}/>
        // } else {
        //     currentlyVisibleState = 
        //         <DisplayText
        //             displayText = {this.props.allSections}/>
        // }


        const {error, isLoading, rawHtml} = this.props;
        if (error) {
            return <React.Fragment>Error: {error.message}</React.Fragment>;
        } else if (isLoading) {
            console.log("isLoading")
            return <React.Fragment>Loading...</React.Fragment>;
        } else {
            console.log("RAW HTML: "+rawHtml.rawHtml)
            const body = rawHtml.rawHtml.split("<body>")[1]
            console.log(body);
            return (
                
                <React.Fragment>
                        {/* {currentlyVisibleState} */}
                        
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
        rawHtml: state.rawHtml,
        isLoading: state.isLoading,
        error: state.error,
        formVisibleOnPage: state.formVisibleOnPage
    }
}

AppControl = connect(mapStateToProps)(AppControl);

export default AppControl;