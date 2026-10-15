interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "اطلاعاتی برای نمایش وجود ندارد.",
}: EmptyStateProps) {
  return <p className="text-black mr-10">{message}</p>;
}