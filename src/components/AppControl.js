import React from "react";
import UrlLoader from "./UrlLoader";
import UrlForm from "./UrlForm";
import MainDisplay from "./MainDisplay";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import {withFirestore} from "react-redux-firebase";

class AppControl extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                urlFormVisible: false
            }
    }

    handleClickAddUrl = () => {
        this.setState({urlFormVisible: true})
    }

    handleHidingUrlLoader = () => {
        this.setState({
            urlFormVisible: false
        })
    }

    render() {
        let currentlyVisibleState = null;

        currentlyVisibleState = 
                <MainDisplay
                    onClickingLoadUrl = {this.handleClickAddUrl}/>

        if(this.state.urlFormVisible) {
            return (
                <React.Fragment>
                    <UrlLoader
                        setUrlFormVisibleToFalse = {this.handleHidingUrlLoader}/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    {currentlyVisibleState}
                </React.Fragment>
            )
        }
    }
}

AppControl.propTypes = {
    urlFormVisible: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        urlFormVisible: state.urlFormVisible
    }
}

AppControl = connect(mapStateToProps)(AppControl);

export default withFirestore(AppControl);