"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

import Image from "next/image";
import cn from "classnames";
import mcLogo from "public/images/logo/mc-logo_white.png";
import { nav } from "@/nttb-config";
import { useOverflowHidden } from "@/context/overflow-hidden";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { toggleOverflowHidden } = useOverflowHidden();

  function handleNavClick() {
    setIsMobileNavOpen(!isMobileNavOpen);
    toggleOverflowHidden();
  }

  return (
    <>
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
      <div className="">
        <Image
          src={mcLogo}
          alt="Midnight Calls logo"
          className="absolute z-30 w-1/2 pt-3 -translate-x-1/2 left-1/2"
        />
      </div>
      <header className="fixed z-20 flex justify-end w-full px-5 py-3 bg-black">
        <button
          className="text-4xl font-bold uppercase"
          onClick={handleNavClick}
        >
          {isMobileNavOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars2Icon className="w-8 h-8" />
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
