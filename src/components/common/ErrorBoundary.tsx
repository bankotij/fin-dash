import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep this minimal and structured for debugging.
    console.error("ui_error_boundary", { error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-sm text-gray-700">
          <h1 className="text-lg font-semibold text-gray-900">Something went wrong</h1>
          <p className="mt-2">Refresh the page. If the issue persists, check the console logs.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
