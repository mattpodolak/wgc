import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

import {AppProvider} from '@shopify/polaris';

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import AboutPage from "views/AboutPage/AboutPage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";
import RecipePage from "views/RecipePage/RecipePage.jsx";
import './index.css'
import BaconWrappedVenison from "views/RecipePage/Recipes/BaconWrappedVenison";
import PheasantMushroom from "views/RecipePage/Recipes/PheasantMushroom";
import BearKabob from "views/RecipePage/Recipes/BearKabob";

var hist = createBrowserHistory();

//initialize GA
if(process.env.NODE_ENV === "production"){
  const trackingId = "UA-171074052-1";
  ReactGA.initialize(trackingId);
  console.log("Google Analytics Initiated");
}


// Initialize google analytics page view tracking
hist.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <AppProvider>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/recipes/bacon-wrapped-venison" component={BaconWrappedVenison} />
        <Route path="/recipes/pheasant-mushroom-sauce" component={PheasantMushroom} />
        <Route path="/recipes/bear-meat-kabobs" component={BearKabob} />
        <Route path="/recipes" component={RecipePage} /> 
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
