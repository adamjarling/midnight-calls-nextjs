"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import cn from "classnames";
import mcLogo from "public/images/logo/mc-logo_white.png";
import { nav } from "@/nttb-config";
import { useOverflowHidden } from "@/context/overflow-hidden";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const { toggleOverflowHidden } = useOverflowHidden();

  const path = usePathname();
  const imageRef = useRef(null);

  const isNavbarInitialTransparent = ["/"].includes(path || "");
  const hideLogo = ["/"].includes(path || "");

  function handleNavClick() {
    console.log("click");
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
      {/* Nav overlay */}
      <nav
        className={cn(
          [
            `z-10 w-full h-screen mb-64 text-center border border-black bg-black/85 border-spacing-10 transition-opacity duration-300 `,
          ],
          {
            "opacity-0": !isMobileNavOpen,
            "opacity-100": isMobileNavOpen,
            hidden: !isMobileNavOpen,
            fixed: isMobileNavOpen,
          }
        )}
      >
        <ul className="absolute w-full pb-24 space-y-12 -translate-x-1/2 -translate-y-1/2 lg:space-y-16 left-1/2 top-1/2">
          {nav.map((link) => (
            <li
              key={link.name}
              className="text-4xl font-bold uppercase lg:text-6xl"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logo */}
      <Link
        href="/"
        className={cn({
          "opacity-0": hideLogo,
          "opacity-100": !hideLogo,
        })}
      >
        <Image
          ref={imageRef}
          src={mcLogo}
          alt="Midnight Calls logo"
          className="absolute top-0 z-30 w-auto h-24 pt-3 -translate-x-1/2 left-1/2"
        />
      </Link>

      {/* Header bar */}
      <header
        className={classNames([`fixed z-20 w-full`], {
          "bg-black": !isLogoVisible,
        })}
      >
        <div className="flex items-center justify-center px-5 py-5">
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
            className="absolute text-4xl font-bold uppercase transform -translate-y-1/2 right-6 lg:right-8 top-1/2"
            onClick={handleNavClick}
          >
            {isMobileNavOpen ? (
              <XMarkIcon className="w-10 h-10 md:w-10 md:h-10" />
            ) : (
              <Bars2Icon className="w-10 h-10 md:w-14 md:h-14" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
