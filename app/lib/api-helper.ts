import axios from "axios";
import { BASE_URL } from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 400:
          error.message = "اطلاعات ارسال‌شده صحیح نیست.";
          break;

        case 401:
          error.message = "لطفاً وارد حساب کاربری شوید.";
          break;

        case 403:
          error.message = "شما اجازه دسترسی به این بخش را ندارید.";
          break;

        case 404:
          error.message = "اطلاعات موردنظر پیدا نشد.";
          break;

        case 408:
          error.message = "درخواست زمان زیادی طول کشید.";
          break;

        case 429:
          error.message = "تعداد درخواست‌ها زیاد است. لطفاً کمی بعد دوباره تلاش کنید.";
          break;

        case 500:
          error.message = "مشکلی در سرور رخ داده است.";
          break;

        case 502:
          error.message = "ارتباط با سرور با مشکل مواجه شد.";
          break;

        case 503:
          error.message = "سرویس موقتاً در دسترس نیست.";
          break;

        case 504:
          error.message = "سرور در زمان مناسب پاسخ نداد.";
          break;

        default:
          error.message = "خطایی رخ داده است. لطفاً دوباره تلاش کنید.";
      }
    } else if (error.request) {
      error.message = "ارتباط با سرور برقرار نشد.";
    } else {
      error.message = "خطایی در ارسال درخواست رخ داد.";
    }

    return Promise.reject(error);
  }
);

export default api;

