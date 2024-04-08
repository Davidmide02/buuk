import type { Metadata } from "next";
import "antd/dist/reset.css";
// C:\Users\HP\Desktop\project\buuk\node_modules\antd\dist\reset.css
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AppHeader from "../components/header";
import { ConfigProvider } from "antd";
import { Breadcrumb, Layout } from "antd";
import Footer from "@/components/footer";
const { Header } = Layout;
import { Head } from "next/document";
import QueryProvider from "@/utensil/queryProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Buuk",
  description: "A community of reader all over the globe",
};

// ("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "white",
                  colorBgContainer: "#0e21ed",
                },
              }}
            >
              <div className="pb-[10rem] bg-gray-300">
                <AppHeader />
              </div>

              {children}
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
