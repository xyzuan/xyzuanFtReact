"use client";
import "../style/globals.css";
import "../style/fonts.css";
import { ThemeProvider, useTheme } from "next-themes";

const siteTitle = "Jody Yuantoro | Admin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <meta property="title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
      </head>
      <body className={`duration-200`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
