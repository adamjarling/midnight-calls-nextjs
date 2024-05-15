"use client";

import { ExternalLink } from "zuma-blocks";
import Image from "next/image";
import React from "react";
import soColdCover from "public/images/so-cold_single-cover.png";

const HomeHero = () => {
  return (
    <div className="space-y-6 xl:container">
      <div className="relative flex justify-center">
        <Image
          src={soColdCover}
          alt="So Cold single cover"
          className="w-auto max-h-[80vh]"
        />
      </div>

      <h2 className="text-2xl text-center md:text-4xl">
        "So Cold"
        <br />
        Single Out Now!
      </h2>

      <div className="flex justify-center">
        <ExternalLink
          href="https://www.youtube.com/watch?v=0EN_QF5trtU"
          classNames="button"
        >
          Watch on YouTube
        </ExternalLink>
      </div>

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/0EN_QF5trtU?si=WO3DKH9d4X50ZmY8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HomeHero;
