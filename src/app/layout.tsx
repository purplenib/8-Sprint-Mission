import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/common/Layout/Header";
import "@/assets/styles/global.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="일상의 모든 물건을 거래해보세요." />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
