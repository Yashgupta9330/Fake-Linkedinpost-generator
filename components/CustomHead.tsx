import * as React from "react";
import Head from "next/head";
import Script from "next/script";

export const CustomHead = ({
  title = "Realistic Fake Tweet Generator | Tweet Hunter 🏹",
  desc = "Generate realistic fake tweets and export them as screenshots. Edit usernames, content, number of views, likes, retweets and bookmarks",
  url = "https://tweethunter.io/fake-tweet-generator",
  image = "",
  type = "website",
}) => {
  if (!image)
    image =
      "https://ondemand.bannerbear.com/simpleurl/9MOpzJ843LWBnGWYvq/image/title/text/" +
      encodeURIComponent(title.replace(" | Tweet hunter", ""));

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" /> */}
        <link rel="canonical" href={url} />

        <meta name="description" content={desc} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />

        {/* Open Graph */}
        <meta property="og:url" content={url} key="ogurl" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta property="og:image" content={image} key="ogimage" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
        <meta property="og:type" content={type} />

        <link
          href="https://assets.website-files.com/64ad1f808f894585c5c47c11/64ad1f808f894585c5c47ca4_favicon%20tweet%20hunter.png"
          rel="shortcut icon"
          type="image/x-icon"
        ></link>

        <link
          href="https://assets.website-files.com/64ad1f808f894585c5c47c11/64ad1f808f894585c5c47ca6_Group%20252%20(1).png"
          rel="apple-touch-icon"
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                        `,
          }}
        />

        {/* GOOGLE TAG MANAGER - TWEET HUNTER */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PH78DXF');`,
          }}
        />
      </Head>
    </>
  );
};
