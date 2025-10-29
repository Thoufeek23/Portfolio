import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an external service here
    // For now we log to the console so the developer can see details during dev
    // eslint-disable-next-line no-console
    console.error('Uncaught error in component tree:', error, info);
  }

  handleRetry = () => {
    // Reset local error state and try rendering children again
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-6">
          <div className="max-w-xl w-full bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">Something went wrong.</h2>
            <p className="text-sm text-gray-300 mb-4">
              An unexpected error occurred while rendering the page. You can try to reload or retry.
            </p>
            <div className="flex gap-3">
              <button
                onClick={this.handleRetry}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-transparent border border-gray-600 rounded text-gray-100"
              >
                Reload page
              </button>
            </div>
            <details className="mt-4 text-xs text-gray-400">
              <summary>Technical details</summary>
              <pre className="whitespace-pre-wrap">{String(this.state.error)}</pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
