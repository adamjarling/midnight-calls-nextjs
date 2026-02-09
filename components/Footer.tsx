"use client";

import { nav, socialMedia } from "@/nttb-config";

import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const socials = [
  {
    name: "Facebook",
    href: socialMedia.facebook.url,
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: socialMedia.instagram.url,
    icon: FaInstagram,
  },
  {
    name: "Spotify",
    href: socialMedia.spotify.url,
    icon: FaSpotify,
  },
  {
    name: "YouTube",
    href: socialMedia.youTube.url,
    icon: FaYoutube,
  },
];

const Footer = () => {
  return (
    <div className="relative">
      <div className="relative z-20">
        <footer className="py-12 text-center">
          <nav className="flex flex-col items-center gap-4 mb-8 md:flex-row md:justify-center md:gap-8">
            {nav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-6 mb-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500 mb-0">
            &copy; {new Date().getFullYear()} The Midnight Calls. All rights
            reserved.
          </p>
        </footer>
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
