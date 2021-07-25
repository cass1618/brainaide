import React from "react";
import Header from "./Header";
// import AppControl from "./AppControl";
// import ApiFirestoreControl from "./ApiFirestoreControl";
import FileList from "./FileList";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <FileList/>
    </React.Fragment>
  );
}

export default App;