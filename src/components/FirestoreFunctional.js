import React from "react";

//Need to define functionFromFunction

function FirestoreFunctional(props) {

    

    let things = props.propsFromClass
    console.log(things)
    //props.anArray;
    //display the array that came from FirestoreClass
    return (
        <React.Fragment>
            <div>return from Functional</div>
            <div>{things}</div>
        </React.Fragment>
    )
}

export default FirestoreFunctional;