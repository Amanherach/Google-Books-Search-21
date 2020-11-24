import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Books from "./pages/Books";
import ReadList from "./pages/ReadList"
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/reading-list">
            <ReadList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;