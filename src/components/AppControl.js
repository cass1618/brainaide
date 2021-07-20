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
                currentUrl: null,
                loadingUrl: false,
                urlFormVisible: false
            }
    }

    handleClickAddUrl = () => {
        this.setState({urlFormVisible: true})
    }

    handleAddingUrlToList = () => {
        this.setState({
            urlFormVisible: false
        })
    }

    render() {
        let currentlyVisibleState = null;

        if(this.state.urlFormVisible) {
            currentlyVisibleState = <UrlForm onLoadingUrl = {this.handleAddingUrlToList}/>
        } else {
            currentlyVisibleState = 
                <MainDisplay
                    onClickingLoadUrl = {this.handleClickAddUrl}/>
        }

        return (
            <React.Fragment>
                <h1>App Control Return</h1>
                {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

AppControl.propTypes = {
    storedHtmlFileList: PropTypes.object,
    urlFormVisible: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        urlFormVisible: state.urlFormVisible
    }
}

AppControl = connect(mapStateToProps)(AppControl);

export default withFirestore(AppControl);