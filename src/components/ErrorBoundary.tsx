import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in THE 100:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAFAF7] text-[#1C1917] flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white border border-[#E7E5E0] p-8 text-center shadow-xs">
            <h1 className="font-serif text-3xl font-bold mb-3 text-[#1C1917]">THE 100</h1>
            <p className="font-serif italic text-[#78716C] mb-6">
              100 English words you know — but probably don’t fully use.
            </p>
            <p className="text-xs text-[#57534E] mb-6">
              An unexpected error occurred while loading the application.
            </p>
            <button
              type="button"
              onClick={() => {
                window.location.hash = '';
                window.location.reload();
              }}
              className="bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-[#292524] transition-colors cursor-pointer"
            >
              Reload Collection
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
