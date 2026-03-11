import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        <h1>header</h1>
        {children}
        <h2>footer</h2>
      </body>
    </html>
  );
}
