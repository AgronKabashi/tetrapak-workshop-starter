import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import EquipmentPerformance from "modules/equipment-performance";

const App = () =>
  <div>
    <Router>
      <Switch>
        <Route path="/equipmentperformance" component={EquipmentPerformance} />
        <Redirect to="/equipmentperformance" />
      </Switch>
    </Router>
  </div>;

export default App;
