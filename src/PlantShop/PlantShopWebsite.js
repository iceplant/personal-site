import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from './context/cart';

import PlantShopHeader from './PlantShopHeader';
import Home from './pages/Home'
import Cart from './pages/cart'
import Plants from './pages/plants'

const PlantShopWebsite = () => {
  return (
    <CartProvider>
      <React.StrictMode>
    <Router>
      <PlantShopHeader />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
      </Switch>
    </Router>
    </React.StrictMode>
    </CartProvider>
    
  );
}
export default PlantShopWebsite;