"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import mcLogo from "public/images/logo/mc-logo_white.png";
import { nav } from "@/nttb-config";
import { useOverflowHidden } from "@/context/overflow-hidden";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const { toggleOverflowHidden } = useOverflowHidden();

  const imageRef = useRef(null);

  function handleNavClick() {
    setIsMobileNavOpen(!isMobileNavOpen);
    toggleOverflowHidden();
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLogoVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={cn(
          [
            `fixed z-10 w-full h-screen pb-32 text-center border border-black bg-black/85 border-spacing-10 transition-opacity duration-300`,
          ],
          {
            "opacity-0": !isMobileNavOpen,
            "opacity-100": isMobileNavOpen,
          }
        )}
      >
        <ul className="absolute w-full space-y-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          {nav.map((link) => (
            <li key={link.name} className="text-2xl font-bold uppercase">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/" className="">
        <Image
          ref={imageRef}
          src={mcLogo}
          alt="Midnight Calls logo"
          className="absolute top-0 z-30 w-1/2 pt-3 -translate-x-1/2 left-1/2"
        />
      </Link>

      <header className="fixed z-20 flex items-center justify-center w-full px-5 py-4 bg-black">
        <Link
          href="/"
          className={cn([`uppercase font-headline ease-in duration-200`], {
            "opacity-0": isLogoVisible,
            "opacity-100": !isLogoVisible,
          })}
        >
          The Midnight Calls
        </Link>
        <button
          className="absolute text-4xl font-bold uppercase transform -translate-y-1/2 right-5 top-1/2"
          onClick={handleNavClick}
        >
          {isMobileNavOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars2Icon className="w-8 h-8" />
          )}
        </button>
      </header>
    </div>
  );
};

export default Navbar;
