import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wellfound (formerly Angel)",
  description: "Find Jobs here ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed z-[1000] border p-[10px] w-full bg-white">

          <Navbar />
        </div>
        <div className="flex relative flex-col w-full p-[15px] md:max-w-[1000px] md:px-[35px] lg:px-[80px] lg:max-w-[1300px] xl:max-w-[1500px] m-auto ">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
