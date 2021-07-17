import React from "react";
import UrlForm from "./UrlForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import DisplayText from "./DisplayText";

class AppControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    handleLoadingUrl = (url) => {
        const {dispatch} = this.props;
        const action = a.loadUrl(url);
        dispatch(action);
    }

    render() {

        let currentlyVisibleState = null;

        if(this.props.formVisibleOnPage) {
            // currentlyVisibleState = 
            //     <UrlForm
            //         onLoadingUrl = {this.handleLoadingUrl}/>
        } else {
            currentlyVisibleState = 
                <DisplayText
                    displayText = {this.props.allSections}/>
        }
        
        return (
            <React.Fragment>
                <UrlForm
                    onLoadingUrl = {this.handleLoadingUrl}/>
                {currentlyVisibleState}
                {/* <button onClick = {this.handleClick}>BUTTON</button> */}
            </React.Fragment>
        )
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