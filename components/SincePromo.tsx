"use client";

import Image from "next/image";
import React from "react";
import sinceCover from "public/images/since_single_cover-final.jpeg";

const SincePromo = () => {
  return (
    <div className="space-y-6 xl:container">
      <div className="relative flex justify-center">
        <Image
          src={sinceCover}
          alt="Since I've Been Thinking single cover"
          className="w-auto max-h-[80vh]"
        />
      </div>

      <h2 className="text-2xl text-center md:text-4xl">
        &quot;Since I&apos;ve Been Thinking&quot;
        <br />
        Single Out Now!
      </h2>

      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/watch?v=tpHGded-Ung"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default SincePromo;
