import React from "react";
import Error500 from "./Error500";
import PageFrame from "../PageFrame";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <PageFrame centered>
          <Error500 />
        </PageFrame>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;