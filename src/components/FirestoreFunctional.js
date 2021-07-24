import React from "react";
import {useFirestore} from "react-redux-firebase"
//Need to define functionFromFunction

function FirestoreFunctional(props) {

    const firestore = useFirestore();

    const url = props.propsFromClass[0];
    const fullText = props.propsFromClass[1];

     //Need to return some sort of React Component or it will say Objects are not valid as a React child

    function addTicketToFirestore(e) { 
        e.preventDefault();
        //Might be a problem with async
        // props.makeApiCall();
        //Must wait till after the call is finished
        props.addArrayToFirestore();

        return firestore.collection("htmlFiles").add(
            {
                url: url,
                html: fullText,
                timeOpen: firestore.FieldValue.serverTimestamp()
            }
        );
    }

        
    return (
        <React.Fragment>
            {/* I couldn't figure out any other way to call the function other than putting it inside a button */}
            <form onSubmit={addTicketToFirestore}>
                <button type="submit">ADD TO FIRESTORE</button>
            </form>
            {/*It doesn't like this here, maybe I could create a new component to call the function */}
            {/* {addTicketToFirestore} */}
            <div>return from Functional</div>
            {/* <div>{url} {fullText} was added to Firestore</div> */}
        </React.Fragment>
    )
}

export default FirestoreFunctional;