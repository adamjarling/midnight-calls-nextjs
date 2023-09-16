import { SocialIcons } from "zuma-blocks";
import { socialMedia } from "@/nttb-config";

export const navigation = [
  { name: "Press Pack", href: "/press" },
  { name: "Live", href: "/live" },
  // { name: "Music", href: "/music" },
  // { name: "Photos", href: "/photos" },
];

export const socialIcons = [
  {
    name: "Facebook",
    href: socialMedia.facebook.url,
    icon: SocialIcons.FacebookIcon,
  },
  {
    name: "Instagram",
    href: socialMedia.instagram.url,
    icon: SocialIcons.InstagramIcon,
  },
  {
    name: "Twitter",
    href: socialMedia.twitter.url,
    icon: SocialIcons.TwitterIcon,
  },
];
