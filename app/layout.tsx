import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { site } from "./data";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | 亚克力展示用品定制`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
