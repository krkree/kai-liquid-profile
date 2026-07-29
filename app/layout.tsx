import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAI · 独立创作者与产品设计师",
  description: "KAI 的个人信息、作品与社交链接聚合页。",
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
