"use client";

import ParallaxHero from "@/components/ParallaxHero";
import React from "react";

const HeroWrapper = () => {
  return (
    <div className="relative">
      <ParallaxHero
        imageUrl={`/photos/505318457_775036008193220_1042307814692525926_n.jpg`}
        headline="Live"
        altText="MC Live"
        className="h-96 md:h-96"
      />
    </div>
  );
};

export default HeroWrapper;
