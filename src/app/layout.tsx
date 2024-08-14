import React, { ReactNode } from "react";
import Header from "components/common/Layout/Header";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
