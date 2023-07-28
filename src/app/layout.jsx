import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Everyday Widgets!",
  description: "Web Application full of simple widgets!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen flex flex-col justify-center items-center p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
