import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KrKree · Links",
  description: "KrKree 的个人信息与社交链接聚合页。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
