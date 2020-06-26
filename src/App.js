import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ViewportWidthProvider from "./utils/getViewport";
import Home from "./routes/Home";
import About from "./routes/About";
import ProjectDetailsRoute from "./routes/ProjectDetailsRoute";
import { GlobalStyle } from "./utils/globalStyles";
import Nav from "./components/nav/Nav";
import { Theme } from "./utils/ThemeContext";

require.context("./assets/img", true);

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
              <Route
                exact
                path="/project/:id"
                component={ProjectDetailsRoute}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </ViewportWidthProvider>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
