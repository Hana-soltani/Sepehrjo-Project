import type { Metadata } from "next";
import QueryProvider from "./providers/query-provider";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "./components/organisms/Navbar/Navbar";
import Footer from "./components/organisms/Footer/Footer";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "سپهرجو ",
  description: "پلتفرم آموزش و یادگیری سپهرجو",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl"className={`${vazirmatn.variable} ${vazirmatn.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col font-[var(--font-vazirmatn)]">

        <QueryProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </QueryProvider>

      </body>
    </html>
  );
}