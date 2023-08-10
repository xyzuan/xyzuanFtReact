import "./globals.css";
import "./fonts.css";

import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>xyzuan</title>
        <meta
          name="description"
          content="Welcome to Jody Yuantoro's Portfolio Website. Explore a collection of my creative projects, designs, and accomplishments. Discover how I bring ideas to life through innovative design and development."
        />
        <meta property="og:title" content="xyzuan" />
        <meta
          property="og:description"
          content="Welcome to Jody Yuantoro's Portfolio Website. Explore a collection of my creative projects, designs, and accomplishments. Discover how I bring ideas to life through innovative design and development."
        />
        <meta property="og:image" content="/assets/xyzuanbanner.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
