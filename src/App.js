import React, { Suspense, lazy } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ViewportWidthProvider from "./utils/getViewport";
import Home from "./routes/Home";
import { GlobalStyle } from "./utils/globalStyles";
import Nav from "./components/nav/Nav";
import { Theme } from "./utils/ThemeContext";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import TransitionGroup from "react-transition-group/esm/TransitionGroup";

require.context("./assets/img", true);

const About = lazy(() => import("./routes/About"));
// const ProjectDetailsRoute = lazy(() => import("./routes/ProjectDetailsRoute"));
import ProjectDetailsRoute from "./routes/ProjectDetailsRoute";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <React.Fragment>
          <ViewportWidthProvider>
            <Nav />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    classNames="change-route"
                    timeout={{ enter: 750, exit: 750 }}
                    appear
                    enter
                    exit
                  >
                    <div>
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Suspense fallback={<div>Chargement...</div>}>
                          <Route exact path="/about" component={About} />
                        </Suspense>
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />

            <Switch>
              <Suspense fallback={<div>Chargement...</div>}>
                <Route
                  exact
                  path="/project/:id"
                  component={ProjectDetailsRoute}
                />
              </Suspense>
            </Switch>
          </ViewportWidthProvider>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
