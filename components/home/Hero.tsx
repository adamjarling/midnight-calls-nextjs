"use client";

import { HeroImage } from "zuma-blocks";
import React from "react";

const HomeHero = () => {
  return (
    <HeroImage
      images={[
        {
          mediaQuery: `(max-width: 640px)`,
          src: "/images/the-midnight-calls_promo-pic-mobile.jpg ",
          srcSet: "/images/the-midnight-calls_promo-pic-mobile2.jpg",
        },
        {
          mediaQuery: "(min-width: 641px)",
          src: "/images/the-midnight-calls_promo-pic.jpg",
          srcSet: "/images/the-midnight-calls_promo-pic.jpg",
        },
        // {
        //   mediaQuery: "",
        //   src: "/images/the-midnight-calls_promo-pic.jpg",
        //   srcSet: "/images/the-midnight-calls_promo-pic.jpg",
        // },
      ]}
    />
  );
};

export default HomeHero;
