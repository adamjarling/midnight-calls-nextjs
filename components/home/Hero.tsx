"use client";

import { ExternalLink } from "zuma-blocks";
import Image from "next/image";
import React from "react";
import soColdCover from "public/images/so-cold_single-cover.png";

const HomeHero = () => {
  return (
    <div className="space-y-6 xl:container">
      <Image src={soColdCover} alt="So Cold single cover" className="" />

      <h2 className="text-2xl text-center md:text-4xl">
        "So Cold"
        <br />
        World premiere
        <br />
        May 14, 2024
      </h2>

      <div className="flex justify-center">
        <ExternalLink
          href="https://www.youtube.com/watch?v=0EN_QF5trtU"
          classNames="button"
        >
          Watch on YouTube
        </ExternalLink>
      </div>
    </div>
  );
};

export default HomeHero;
