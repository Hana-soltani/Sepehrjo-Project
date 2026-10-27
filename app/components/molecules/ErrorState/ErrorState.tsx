import { IoAlert } from "react-icons/io5";


interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "خطایی رخ داده است.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div dir="rtl" className="flex w-full justify-center items-center  px-4 py-10 ">
      <div className="flex w-full max-w-md flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50 px-6 py-8 text-center shadow-sm  ">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600     ">
          <IoAlert />
        </div>
        <h2 className="mb-2 text-lg font-bold text-red-700    ">
          مشکلی پیش آمده است.
        </h2>

        <p className="max-w-sm text-sm leading-7 text-red-600  ">
          {message}
        </p>

        {onRetry && (
          <button type="button" onClick={onRetry} className="mt-4 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700  active:scale-95"  >
            دوباره تلاش کنید.
          </button>
        )}

      </div>

    </div>

  );
}