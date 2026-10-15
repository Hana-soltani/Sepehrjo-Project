"use client";

import ErrorState from "../components/molecules/ErrorState/ErrorState";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <ErrorState
      message="دریافت پست‌ها با خطا مواجه شد."
      onRetry={reset}
    />
  );
}