import React from "react";

function Api(props) {

    function makeApiCall(e) { 
        e.preventDefault();

        props.makeApiCall(e.target.url.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={makeApiCall}>
                <input
                    type = "url"
                    name = "url"
                    placeholder = "Enter url"/>
                <button type="submit">CALL API</button>
            </form>
        </React.Fragment>
    )
}

export default Api;