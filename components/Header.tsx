"use client";

import { HeaderSimpleCentered } from "zuma-blocks";
import React from "react";
import { nav } from "@/nttb-config";
import { socialIcons } from "@/data/header";

const Header = () => {
  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="absolute top-0 left-0 w-full h-36 from-black to-transparent bg-gradient-to-b " />
      {/* <div
        className="absolute inset-x-0 z-10 overflow-hidden -top-40 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#52434a] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <HeaderSimpleCentered
        altReferenceTitle="The Midnight Calls"
        classNames="uppercase relative"
        logo={"/images/logo/mc-logo-outline_white.png"}
        mobile={{ bgOverlay: "bg-slate-950" }}
        navigation={nav}
        socialIcons={socialIcons}
      />
    </div>
  );
};

export default Header;
