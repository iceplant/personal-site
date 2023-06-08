import React from "react";

import NavBar from "../nav-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cart";

import PlantShopHeader from "./PlantShopHeader";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Plants from "./pages/plants";

const PlantShopWebsite = (props) => {
  return (
    <div>
      <NavBar setPage={props.setPage} />
      <CartProvider>
        <React.StrictMode>
          <Router>
            {/* <PlantShopHeader /> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              {/* <Route path="/plants">
                <Plants />
              </Route> */}
            </Switch>
          </Router>
        </React.StrictMode>
      </CartProvider>
    </div>
  );
};
export default PlantShopWebsite;
