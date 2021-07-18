import React from "react";
import {connect} from 'react-redux';
import {makeApiCall} from "./../actions";
import {Markup} from "interweave";

class UrlLoader extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(makeApiCall());
    }

    render() {

        const {error, isLoading, rawHtml} = this.props;
        console.log("isLoading: "+rawHtml.isLoading)
        console.log("rawHtml: "+rawHtml.rawHtml)

        if (error) {
            return <React.Fragment>Error: {error.message}</React.Fragment>;

        } else if (rawHtml.isLoading) {
            console.log("isLoading")
            return <React.Fragment>Loading...</React.Fragment>;

        } else {
            const body = rawHtml.rawHtml.split("<body>")[1]

            return (
                
                <React.Fragment>
                    <Markup content={body}/>
                </React.Fragment>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        rawHtml: state.rawHtml,
        isLoading: state.isLoading,
        error: state.error,
        formVisibleOnPage: state.formVisibleOnPage
    }
}

UrlLoader = connect(mapStateToProps)(UrlLoader);

export default UrlLoader;