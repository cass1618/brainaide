import React from "react";
import {useFirestore} from "react-redux-firebase"

function UploadToFirestore(props) {

    const firestore = useFirestore();

    const url = props.propsFromClass[0];
    const fullText = props.propsFromClass[1];

    function addFileToFirestore(e) { 
        
        e.preventDefault();

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
            <form onSubmit={addFileToFirestore}>
                <button type="submit">ADD TO FIRESTORE</button>
            </form>

        </React.Fragment>
    )
}

export default UploadToFirestore;