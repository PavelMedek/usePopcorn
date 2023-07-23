import MobileNavBar from "@/components/Sidebar/MobileNavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "usePopcorn",
  description: "Váš spolehlivý průvodce světem seriálů",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>{children}</body>
    </html>
  );
}
