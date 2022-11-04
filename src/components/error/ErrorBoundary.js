import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import ErrorDefault from "./error-default/ErrorDefault";

const ErrorSlider = lazy(() => import("./error-slider/ErrorSlider"));


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught an error ", error, info);
  }

  render() {
    const { type } = this.props;
    if (this.state.hasError) {
      switch (type) {
        case "slider":
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorSlider />
            </Suspense>
          );
        default:
          return <ErrorDefault />;
      }
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  type: PropTypes.string,
};

export default ErrorBoundary;
