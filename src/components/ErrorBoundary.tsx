import React, { ErrorInfo, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

type State = {
  error: null | Error;
  errorInfo: null | ErrorInfo;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Fallback UI. Something went wrong. 😭😭😭</h2>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
