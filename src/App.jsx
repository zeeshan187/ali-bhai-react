import React from "react";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  let data=20 
  let UpdateData=()=>{
    data=40
    console.log(data);
  }
  return (
    <div>
      <h2>{data}</h2>
      <button onClick={UpdateData}>Update Data Value</button>
    </div>
  );
}

export default App;
