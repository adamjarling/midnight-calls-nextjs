"use client";

import ParallaxHero from "@/components/ParallaxHero";
import React from "react";

const HeroWrapper = () => {
  return (
    <div className="relative">
      <ParallaxHero
        imageUrl={`/photos/DSC08971-bw.jpg`}
        headline="Live"
        altText="MC Live"
        className="h-96 md:h-96"
      />
    </div>
  );
};

export default HeroWrapper;
