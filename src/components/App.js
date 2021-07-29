import React from "react";
import Header from "./Header";
import AppControl from "./AppControl";
// import ApiFirestoreControl from "./ApiFirestoreControl";

function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <ApiFirestoreControl/> */}
      <AppControl/>
    </React.Fragment>
  );
}

export default App;