import type { Metadata } from "next";
import { openSans } from "../ui/fonts";
import "./globals.css";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "User Profile",
  description: "User profile page with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={openSans.className}>{children}</body>
      <div><Header /></div> */}
      <body className="layout">
        <Header />
        <div className="layout__content">
          <div className="layout__content__child">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
