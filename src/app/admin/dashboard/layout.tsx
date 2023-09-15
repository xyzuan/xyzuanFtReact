"use client";

import ThemeProviderContext from "@/context/ThemeProvider.context";
import "../../../app/style/shadcn.css";
import "../../style/fonts.css";

import { AuthProviders } from "@/context/SessionProvider.context";

const siteTitle = "Jody Yuantoro | Admin Panel";
const siteDesc =
  "Explore a collection of my creative projects, designs, and accomplishments. Discover how I bring ideas to life through innovative design and development.";
const siteKey =
  "Jody Yuantoro, Frontend Developer, Mobile UI/UX Designer, Android Developer, Malang, Responsive Web Design, User Experience, Web Development, optimized user experiences, Malang-based";

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
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta name="keywords" content={siteKey} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/xyzuan/xyzuanFtReact/main/public/assets/xyzuanbanner.png"
        />
        <meta property="og:image:alt" content="xyzuan" />
        <meta property="og:url" content="https://xyzuan.my.id/" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
      </head>
      <body className={`duration-200`}>
        <AuthProviders>
          <ThemeProviderContext>{children}</ThemeProviderContext>
        </AuthProviders>
      </body>
    </html>
  );
}
