import React from "react";
import UrlForm from "./UrlForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class AppControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    handleLoadingUrl = () => {
        const { dispatch } = this.props;
        const action = a.toggleForm();
        dispatch(action);
    }

    render() {

        let currentlyVisibleState = <UrlForm
            onClickingLoad = {this.handleLoadingUrl}/>

        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick = {this.handleClick}>LOAD</button>
            </React.Fragment>
        )
    }

}

AppControl.propTypes = {
    formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        formVisibleOnPage: state.formVisibleOnPage
    }
}

AppControl = connect(mapStateToProps)(AppControl);

export default AppControl;
