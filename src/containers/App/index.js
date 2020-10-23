import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartPage from "../CartPage";
import ErrorPage from "../ErrorPage";
import CompletedPage from "../CompletedPage";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CartPage} />
      <Route path="/completed" component={CompletedPage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
