import React, { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
    <div>
      <h1>Something went wrong.</h1>

      <button
        onClick={() => {
          window.location.href = "/dashboard/chart";
        }}
      >
        Go to Dashboard
      </button>

      <button onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;