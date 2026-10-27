import axios from "axios";

const ERROR_MESSAGES: Record<number, string> = {
    400: "اطلاعات وارد شده صحیح نیست. لطفا اطلاعات را بررسی و دوباره تلاش کنید.",
    401: "برای ادامه، ابتدا وارد حساب کاربری خود شوید.",
    403: "شما اجازه دسترسی به این بخش را ندارید.",
    404: "مورد موردنظر پیدا نشد.",
    408: "زمان انتظار برای پاسخ به پایان رسید. لطفاً دوباره تلاش کنید.",
    409: "امکان انجام این درخواست در وضعیت فعلی وجود ندارد.",
    422: "اطلاعات واردشده قابل پردازش نیست. لطفاً اطلاعات را بررسی کنید.",
    429: "تعداد درخواست‌ها بیش از حد مجاز است. لطفاً کمی بعد دوباره تلاش کنید.",
    500: "مشکلی در سرور رخ داده است. لطفاً کمی بعد دوباره تلاش کنید.",
    502: "ارتباط با سرور با مشکل مواجه شد. لطفاً دوباره تلاش کنید.",
    503: "سرویس موقتاً در دسترس نیست. لطفاً کمی بعد دوباره تلاش کنید.",
    504: "پاسخی از سرور دریافت نشد. لطفاً دوباره تلاش کنید.",
};

const DEFAULT_ERROR_MESSAGE = "خطایی در ارتباط با سرور پیش آمده.لطفا دوباره تلاش کنید.";
const NETWORK_ERROR_MESSAGE = "ارتباط با سرور برقرار نشد.لطفا اتصال اینترنت خود را بررسی کنید.";
const REQUEST_ERROR_MESSAGE = "ارسال درخواست با مشکل مواجه شد.لطفا دوباره تلاش کنید.";

export class ApiError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}


export class ErrorHandler {
    static handle(error: unknown): ApiError {
        
        if (!axios.isAxiosError(error)) {
            return new ApiError(DEFAULT_ERROR_MESSAGE, 0)
        }

        if (error.response) {
            const { status } = error.response;
            const message = ERROR_MESSAGES[status] ?? DEFAULT_ERROR_MESSAGE;
            return new ApiError(message, status);
        }

        if (error.request) {
            return new ApiError(NETWORK_ERROR_MESSAGE, 0)
        }
        return new ApiError(REQUEST_ERROR_MESSAGE,0); 
    }
}