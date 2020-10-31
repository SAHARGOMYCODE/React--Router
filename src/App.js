import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Film from "./Component/Film";
import BondeAnnonce from "./Component/BondeAnnonce";

import Description from "./Component/Description";

function App() {
  return (
    <div className="App">
      <Router>
        <Film />
        <Route path="/Description" exact component={Description}></Route>
        <Route path="/BondeAnnonce" exact component={BondeAnnonce}></Route>
      </Router>
    </div>
  );
}

export default App;
