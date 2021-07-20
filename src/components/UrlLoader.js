import React from "react";
import {connect} from 'react-redux';
import {makeApiCall} from "./../actions";
import {Markup} from "interweave";

class UrlLoader extends React.Component {



    // componentDidMount() {
    //     const {dispatch} = this.props;
    //     dispatch(makeApiCall());
    // }

    // render() {

    //     const {htmlFile} = this.props;
    //     console.log("isLoading: "+htmlFile.isLoading)
    //     console.log("htmlFile: "+htmlFile.htmlFile)

    //     if (htmlFile.error) {
    //         return <React.Fragment>Error: {htmlFile.error.message}</React.Fragment>;

    //     } else if (htmlFile.isLoading) {
    //         console.log("isLoading")
    //         return <React.Fragment>Loading...</React.Fragment>;

    //     } else {
    //         const body = htmlFile.htmlFile.split("<body>")[1]

    //         return (
                
    //             <React.Fragment>
    //                 <Markup content={body}/>
    //             </React.Fragment>
    //         );
    //     }
    // }
}

const mapStateToProps = state => {
    return {
        htmlFile: state.htmlFile,
        isLoading: state.isLoading,
        error: state.error,
    }
}

UrlLoader = connect(mapStateToProps)(UrlLoader);

export default UrlLoader;