const siteTitle = "The Midnight Calls - Chicago blues rock band";
const ogImage = "/images/5L9A2266.jpg";

const config = {
  OPEN_GRAPH: {
    description:
      "The Midnight Calls are a blues rock band from Chicago featuring Taran De Pablos, Adam J. Arling, Tony McQuaid, Sean Barnes and Chuck Harling.",
    images: [
      {
        url: `/api/og?cover=${encodeURIComponent(ogImage)}`,
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
  { name: "Home", href: "/" },
  { name: "Live", href: "/live" },
  { name: "Videos", href: "/videos" },
  { name: "Photos", href: "/photos" },
  { name: "Music", href: "/music" },
  { name: "Press Pack", href: "/press" },
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
    handle: "6rcObgTuaf4s9uaOEK68D9",
    url: "https://open.spotify.com/artist/6rcObgTuaf4s9uaOEK68D9?si=GBA_A_1nSDS_BwJEzAUEeg",
  },
  youTube: {
    handle: "@themidnightcalls",
    url: "https://www.youtube.com/@themidnightcalls",
  },
};

export { config, nav, socialMedia };
