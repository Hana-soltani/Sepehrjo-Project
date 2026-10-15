interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = "اطلاعات موردنظر پیدا نشد.",
  message = "محتوای موردنظر وجود ندارد.",
}: NotFoundProps) {
  return (
    <main>
      <h1>{title}</h1>
      <p>{message}</p>
    </main>
  );
}