import { Html, Head, Main, NextScript } from "next/document";

const siteTitle = "Jody Yuantoro | Frontend Developer";
const siteDesc =
  "Explore a collection of my creative projects, designs, and accomplishments. Discover how I bring ideas to life through innovative design and development.";
const siteKey =
  "Jody Yuantoro, Frontend Developer, Mobile UI/UX Designer, Android Developer, Malang, Responsive Web Design, User Experience, Web Development, optimized user experiences, Malang-based";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
