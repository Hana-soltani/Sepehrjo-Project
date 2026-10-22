interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = "اطلاعات موردنظر پیدا نشد.",
  message = "محتوای موردنظر وجود ندارد!",
}: NotFoundProps) {
  return (
    <main className="flex items-center justify-center mt-12">
      <div className="text-white font-bold bg-purple-700 w-48 h-20 pt-3 rounded-xl text-center flex-col items-center justify-center ">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </main>
  );
}