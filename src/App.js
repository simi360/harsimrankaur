import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import { ThemeProvider } from "styled-components";

import Home from "./routes/Home";
import Loading from "./components/loader";
import { GlobalStyle } from "./utils/globalStyles";
import Nav from "./components/nav/nav";
import { Theme } from "./utils/ThemeContext";

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./routes/dynamicPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./routes/nomatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route exact path="/dynamic" component={AsyncDynamicPAge} />
            <Route component={AsyncNoMatch} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
