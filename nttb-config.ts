const siteTitle = "The Midnight Calls - Chicago blues rock band";
const ogImage = "/images/5L9A2266.jpg";

const config = {
  OPEN_GRAPH: {
    description:
      "The Midnight Calls are a blues rock band from Chicago featuring Taran De Pablos, Adam J. Arling, Tony McQuaid, Sean Barnes and Chuck Harling.",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent(ogImage)}`,
      },
    ],
    locale: "en-US",
    siteName: siteTitle,
    title: siteTitle,
    type: "website",
    url: "https://themidnightcalls.com",
  },
  SITE: {
    description:
      "The Midnight Calls are a blues rock band from Chicago featuring Taran De Pablos, Adam J. Arling, Tony McQuaid, Sean Barnes and Chuck Harling. ",
    title: siteTitle,
  },
};

const nav = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/masonry-gallery",
    label: "Masonry Gallery",
  },
  {
    href: "/shows",
    label: "Shows",
  },
  {
    href: "/music",
    label: "Music",
  },
];

const socialMedia = {
  instagram: {
    handle: "themidnightcallsofficial",
    url: "https://www.instagram.com/themidnightcallsofficial/",
  },
  facebook: {
    handle: "themidnightcallsofficial",
    url: "https://www.facebook.com/themidnightcallsofficial",
  },
  twitter: {
    handle: "",
    url: "",
  },
  spotify: {
    handle: "",
    url: "",
  },
  youTube: {
    handle: "",
    url: "",
  },
};

export { config, nav, socialMedia };