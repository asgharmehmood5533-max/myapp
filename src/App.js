import React from "react";
import MyComponent from "./practice/practice_default";  
import { Named_Component,Another_Named_Component } from "./practice/practice-name ";
import Default_Component from "./practice/practice_default";
function App() {
  return (
    <div>
      <Default_Component/>
      <Named_Component />
      <Another_Named_Component />
    </div>
  );

}

export default App;
