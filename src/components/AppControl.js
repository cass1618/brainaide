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
        // const {dispatch} = this.props;
        // const action = a.addFile(file);
        // dispatch(action);
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
                    htmlFileList = {this.props.storedHtmlFileList}
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
        storedHtmlFileList: state.storedHtmlFileList,
        urlFormVisible: state.urlFormVisible
    }
}

AppControl = connect(mapStateToProps)(AppControl);

export default withFirestore(AppControl);