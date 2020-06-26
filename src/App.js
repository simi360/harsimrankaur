import React, { Suspense, lazy } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ViewportWidthProvider from "./utils/getViewport";
import Home from "./routes/Home";
import { GlobalStyle } from "./utils/globalStyles";
import Nav from "./components/nav/Nav";
import { Theme } from "./utils/ThemeContext";

require.context("./assets/img", true);

const About = lazy(() => import("./routes/About"));
const ProjectDetailsRoute = lazy(() => import("./routes/ProjectDetailsRoute"));

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <React.Fragment>
          <ViewportWidthProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Suspense fallback={<div>Chargement...</div>}>
                <Route
                  exact
                  path="/project/:id"
                  component={ProjectDetailsRoute}
                />
                <Route exact path="/about" component={About} />
              </Suspense>
            </Switch>
          </ViewportWidthProvider>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
