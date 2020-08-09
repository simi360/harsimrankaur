import React, { Suspense, lazy, useState, useEffect } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import TransitionGroup from "react-transition-group/esm/TransitionGroup";

import Nav from "./components/nav/Nav";
import ViewportWidthProvider from "./utils/getViewport";
import HomeLoader from "./components/loaders/home-loader/HomeLoader";
import Loader from "./components/loaders/main-loader/MainLoader";

import { Theme } from "./utils/ThemeContext";
import { GlobalStyle } from "./utils/globalStyles";

import Home from "./routes/Home";
const Connect = lazy(() => import("./components/connect/Connect"));
const AboutRoute = lazy(() => import("./routes/AboutRoute"));
const ProjectDetailsRoute = lazy(() => import("./routes/ProjectDetailsRoute"));

const App = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  //needed for the exit animation of the loader
  const [showLoader, isShowingLoader] = useState(true);
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isShowingLoader(false);
    }, 4250);
    setTimeout(() => {
      setLoadingStatus(false);
    }, 5000);
  });

  function connectToSite() {
    setConnected(true);
  }

  if (isLoading) {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <CSSTransition
            classNames="load"
            timeout={{ enter: 0, exit: 750 }}
            in={showLoader}
            appear
            enter
            exit
          >
            <HomeLoader />
          </CSSTransition>
        </ThemeProvider>
      </Router>
    );
  }

  if (!isConnected) {
    return (
      <ThemeProvider theme={Theme}>
        <Suspense fallback={<Loader />}>
          <Connect connectToSite={connectToSite} />
        </Suspense>
      </ThemeProvider>
    );
  }

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
                        <Suspense fallback={<Loader />}>
                          <Route exact path="/about" component={AboutRoute} />
                        </Suspense>
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />

            <Switch>
              <Suspense fallback={<Loader />}>
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
