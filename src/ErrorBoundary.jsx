import { Component } from 'react';

// GLOBAL ERROR HANDLER FOR APP YOU CAN WRAP THE WHOLE APP AND ALSO YOU CAN WRAP A SINGLE COMPONENT
// YOU CAN USE A REACT LIBRARY CALLED react-error-boundary

class GlobalErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback({
          error: this.state.error,
          resetErrorBoundary: this.handleReset,
        });
      }

      return (
        <div className="container min-h-screen">
          <div className="h-full flex w-full align-center justify-center flex-column">
            <h3>Something went wrong...</h3>
            <p>{this.state.error.message}</p>
            <button onClick={this.handleReset} className="btn btn-primary">
              Reset
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorHandler;
