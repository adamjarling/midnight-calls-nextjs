"use client";

import { HeroImage } from "zuma-blocks";
import Image from "next/image";
import React from "react";
import liveShot from "public/photos/DSC05518.jpg";
import soColdCover from "public/images/so-cold_single-cover.png";

const HomeHero = () => {
  return (
    <div className="">
      <Image src={soColdCover} alt="So Cold single cover" className="" />
      {/* <div className="absolute w-full h-96 from-black to-transparent bg-gradient-to-b" /> */}
    </div>

    // <HeroImage
    //   images={[
    //     {
    //       mediaQuery: `(max-width: 640px)`,
    //       src: "/images/the-midnight-calls_promo-pic-mobile.jpg ",
    //       srcSet: "/images/the-midnight-calls_promo-pic-mobile2.jpg",
    //     },
    //     {
    //       mediaQuery: "(min-width: 641px)",
    //       src: "/images/the-midnight-calls_promo-pic.jpg",
    //       srcSet: "/images/the-midnight-calls_promo-pic.jpg",
    //     },
    //   ]}
    // />
  );
};

export default HomeHero;
