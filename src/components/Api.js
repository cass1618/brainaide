import React from "react";
import "./../styles/ApiFirestoreControl.css"

function Api(props) {

    function makeApiCall(e) { 
        e.preventDefault();

        props.makeApiCall(e.target.url.value);
    }

    return (
        <React.Fragment>
            <form className = "afc" onSubmit={makeApiCall}>
                <input
                    type = "url"
                    name = "url"
                    style = {{width: "80vw", margin: "10vh"}}
                    placeholder = "Enter url"/>
                <button 
                    className = "upload"
                    type = "submit">UPLOAD FILE</button>
            </form>
        </React.Fragment>
    )
}

export default Api;