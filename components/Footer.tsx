"use client";

import { FooterSimpleCentered, SocialIcons } from "zuma-blocks";
import { nav, socialMedia } from "@/nttb-config";

import { BsSpotify } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const footerInfo = {
  bandName: "The Midnight Calls",
  nav,
  socials: [
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
      name: "Spotify",
      href: socialMedia.spotify.url,
      icon: BsSpotify,
    },
    {
      name: "YouTube",
      href: socialMedia.youTube.url,
      icon: SocialIcons.YouTubeIcon,
    },
  ],
};

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative z-20">
        <FooterSimpleCentered
          bandName={footerInfo.bandName}
          nav={footerInfo.nav}
          socials={footerInfo.socials}
        />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80787c] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
