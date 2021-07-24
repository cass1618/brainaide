import React from "react";

function Api(props) {

    function makeApiCall(e) { 
        e.preventDefault();

        props.makeApiCall();
    }

    return (
        <React.Fragment>
            <form onSubmit={makeApiCall}>
                <button type="submit">CALL API</button>
            </form>
        </React.Fragment>
    )
}

export default Api;