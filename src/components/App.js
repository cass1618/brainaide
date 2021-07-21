import React from "react";
import Header from "./Header";
// import AppControl from "./AppControl";
// import UrlLoader from "./UrlLoader";
import FirestoreClass from "./FirestoreClass";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <FirestoreClass/>
    </React.Fragment>
  );
}

export default App;