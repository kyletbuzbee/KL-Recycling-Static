// Error tracking and monitoring service
// This file integrates Sentry for error tracking and reporting

// Note: Sentry is typically used for production error tracking
// but we can set up a basic structure for error handling

export interface ErrorEvent {
  message: string;
  stack?: string;
  userAgent?: string;
  url?: string;
  timestamp: Date;
  severity: "error" | "warning" | "info";
  userId?: string;
  sessionId?: string;
  tags?: Record<string, string>;
}

export class ErrorTracker {
  private static instance: ErrorTracker;
  private errors: ErrorEvent[] = [];
  private maxErrors = 100; // Limit stored errors to prevent memory issues

  constructor() {
    // Set up global error handling
    if (typeof window !== "undefined") {
      window.addEventListener("error", this.handleGlobalError.bind(this) as EventListener);
      window.addEventListener("unhandledrejection", this.handleUnhandledRejection.bind(this));
    }
  }

  public static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker();
    }
    return ErrorTracker.instance;
  }

  private handleGlobalError(event: globalThis.ErrorEvent) {
    this.captureError({
      message: event.message,
      stack: (event.error as Error)?.stack,
      url: event.filename,
      severity: "error",
      timestamp: new Date(),
      userAgent: navigator.userAgent,
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent) {
    this.captureError({
      message: `Unhandled Promise Rejection: ${event.reason}`,
      severity: "error",
      timestamp: new Date(),
      url: window.location.href,
    });
  }

  public captureError(error: Partial<ErrorEvent>) {
    const errorEvent: ErrorEvent = {
      message: error.message || "Unknown error",
      severity: error.severity || "error",
      timestamp: error.timestamp || new Date(),
      url: error.url || (typeof window !== "undefined" ? window.location.href : undefined),
      userAgent: error.userAgent || (typeof window !== "undefined" ? navigator.userAgent : undefined),
      ...error,
    };

    this.errors.push(errorEvent);

    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // In production, send to external service like Sentry
    if (process.env.NODE_ENV === "production") {
      this.sendToExternalService(errorEvent);
    } else {
      // In development, log to console
      console.error("[Error tracked]:", errorEvent);
    }
  }

  private sendToExternalService(error: ErrorEvent) {
    // TODO: Integrate with Sentry, Rollbar, or similar
    // Example:
    // Sentry.captureException(error, { tags: error.tags });
  }

  public getErrors(): ErrorEvent[] {
    return [...this.errors];
  }

  public clearErrors() {
    this.errors = [];
  }

  public getErrorCount(): number {
    return this.errors.length;
  }

  public getErrorsBySeverity(severity: ErrorEvent["severity"]): ErrorEvent[] {
    return this.errors.filter((error) => error.severity === severity);
  }
}

// Global error tracking functions
export const captureError = (error: Partial<ErrorEvent>) => {
  ErrorTracker.getInstance().captureError(error);
};

export const logError = (message: string, error?: Error, tags?: Record<string, string>) => {
  captureError({
    message,
    stack: error?.stack,
    severity: "error",
    tags,
  });
};

export const logWarning = (message: string, tags?: Record<string, string>) => {
  captureError({
    message,
    severity: "warning",
    tags,
  });
};

export const logInfo = (message: string, tags?: Record<string, string>) => {
  captureError({
    message,
    severity: "info",
    tags,
  });
};

// React Error Boundary helper
export const reportToErrorTracker = (error: Error, errorInfo: { componentStack: string }) => {
  captureError({
    message: `React Error: ${error.message}`,
    stack: `${error.stack}\n\nComponent Stack:\n${errorInfo.componentStack}`,
    severity: "error",
    tags: {
      type: "react_error",
      framework: "react",
    },
  });
};

// Initialize error tracking
export const initErrorTracking = () => {
  ErrorTracker.getInstance();
};

// Get error statistics for monitoring
export const getErrorStats = () => {
  const tracker = ErrorTracker.getInstance();
  return {
    total: tracker.getErrorCount(),
    errors: tracker.getErrorsBySeverity("error").length,
    warnings: tracker.getErrorsBySeverity("warning").length,
    infos: tracker.getErrorsBySeverity("info").length,
  };
};
