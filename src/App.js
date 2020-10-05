import React from "react";
import "./App.css";
import MyPhoto from "./Component/Profile/ProfilePhoto";
import MyFullName from "./Component/Profile/FullName";
import MyAddress from "./Component/Profile/Address";
function App() {
  return (
    <>
      <div className="card">
        <MyPhoto />

        <div className="text_card">
          <MyFullName />
          <MyAddress />
        </div>
      </div>
    </>
  );
}

export default App;
