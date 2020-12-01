import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { SingleProduct } from "./components/SingleProduct";
import { Error } from "./components/Error";

import Cart from "./components/Cart";
import Showcart from "./Showcart";

function App() {
  return (
    <Router>
      <Cart />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/showcart" component={Showcart} />
        {/* doc */}
        {/* <ShowCart /> */}
        {/* <ShowCart /> */}
        {/* <ShowCart /> */}
        {/* <Cart /> */}
        {/* </Route> */}
        <Route path="/cocktail/:id">
          <SingleProduct />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
