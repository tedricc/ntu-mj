import "./globals.css";
import localFont from "next/font/local";

const futura = localFont({
  src: [
    {
      path: "../public/futura-book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/futura-book-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/futura-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/futura-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "NTU MJ",
  description: "Welcome to NTU MJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={futura.className}>{children}</body>
    </html>
  );
}
