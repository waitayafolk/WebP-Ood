import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Robbie from './Component/Robbie';
import Class from "./Component/Class";

function App() {
  return (
    <>
    <Router>
      <div>
        <Switch>
          <Route path="/class/:room_id">
            <Class />
          </Route>
          <Route path="/">
            <Robbie />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
