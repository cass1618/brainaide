import React from "react";
import * as a from './../actions';
import {withFirestore} from "react-redux-firebase";
import FirestoreFunctional from "./FirestoreFunctional";

class FirestoreClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anArray: ["url", "fullHtml"]
        }
    }

    //Need to send anArray as a prop into Functional component
    
    //This function should magically send the array
    // handleSendingArrayToFunctionalComponent = () => {
    //     const {dispatch} = this.props;
    //     //What tf does dispatch do
    //     dispatch(action);
    // } 

    render() {
        let currentlyVisibleState = null;
        console.log("this.state.anArray "+this.state.anArray)

        currentlyVisibleState = <FirestoreFunctional propsFromClass = {this.state.anArray}/>

        //Now define functionFromFunction in FunctionalComponent

        return (
            <React.Fragment>
                <div>return from Class</div>
            {currentlyVisibleState}
            </React.Fragment>
        )
    }

}

export default FirestoreClass;