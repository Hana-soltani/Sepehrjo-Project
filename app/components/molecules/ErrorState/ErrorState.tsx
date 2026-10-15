interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "خطایی رخ داده است.",
  onRetry,
}: ErrorStateProps) {
  return (
    <main>
      <p>{message}</p>

      {onRetry && (
        <button onClick={onRetry}>
          دوباره تلاش کنید
        </button>
      )}
    </main>
  );
}