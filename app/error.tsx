"use client";

import ErrorState from "./components/molecules/ErrorState/ErrorState";

export default function Error({
  error,
  reset,
}: {
  error: Error &  {digest?: string}
  reset: () => void;
}) {
  return (
    <ErrorState
      message={error.message}
      onRetry={reset}
    />
  );
}