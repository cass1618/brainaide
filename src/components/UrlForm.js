import React from "react";
import PropTypes from "prop-types";
import {useFirestore} from "react-redux-firebase";

function UrlForm(props) {

    const firestore = useFirestore();

    function addFileToFirestore(e) {

        e.preventDefault();

        props.onLoadingUrl();
        // props.makeAnApiCallTest();

        return firestore.collection("htmlFiles").add(
            {
                url: e.target.url.value,
                fullText: "example text"
            }
        )
    }

    UrlForm.propTypes = {
        onLoadingUrl: PropTypes.func,
        makeAnApiCallTest: PropTypes.func
    }

    return (
        <React.Fragment>
            <form onSubmit={addFileToFirestore}>
                <input
                    type="text"
                    name="url"
                    placeholder="Enter URL"/>
                    <button type="submit">LOAD</button>
            </form>
        </React.Fragment>
    );
}

export default UrlForm;