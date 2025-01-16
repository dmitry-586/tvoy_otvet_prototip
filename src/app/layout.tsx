import "./globals.css";
import type { Metadata } from "next";
import CommonLayoutLeft from "@/components/CommonLayout/CommonLayoutLeft";
import { domAnimation, LazyMotion } from "framer-motion";
import { Public_Sans } from "next/font/google";
import HeaderTop from "@/components/CommonLayout/HeaderTop";
import AuthProvider from "@/components/authPage/AuthProvider";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Твой Ответ",
  description: "в разработке...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={publicSans.className}>
      <LazyMotion features={domAnimation}>
        <body className="flex h-screen">
          <AuthProvider>
            <CommonLayoutLeft />
            <section className="flex-1 inline-flex flex-col overflow-auto ">
              <HeaderTop />
              <main className="flex-1 overflow-auto flex max-[730px]:justify-center">
                {children}
              </main>
            </section>
          </AuthProvider>
        </body>
      </LazyMotion>
    </html>
  );
}
