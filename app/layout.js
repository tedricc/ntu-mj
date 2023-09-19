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
  title: "NTU MJ | Est. 1993 | Home",
  description:
    "Welcome to MJ, NTU's premier dance society. We are a group of dancers who love dance! Learn more about MJ, its members, and events here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={futura.className}>{children}</body>
    </html>
  );
}
