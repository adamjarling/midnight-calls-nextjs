import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { Metadata } from "next";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "../utils/shuffle";

export const metadata: Metadata = {
  title: "Videos",
};

const videos = [
  {
    youTubeId: "tpHGded-Ung",
    title: "The Midnight Calls - Since I've Been Thinking (Official Video)",
    description:
      "“Since I’ve Been Thinking” is the fourth single by Chicago rockers, The Midnight Calls. In this track, the band digs into its Midwest roots producing a melodic Rock & Roll display reminiscent of classic Illinois bands like Cheap Trick, REO Speedwagon or Enuff Z’Nuff. Play it loud!  Filmed, edited, and directed by Michael DiGioia (https://www.mikedphoto.com)",
  },
  {
    youTubeId: "0EN_QF5trtU",
    title: "The Midnight Calls - So Cold (Official Video)",
    description:
      "So Cold is the third single by Chicago rockers The Midnight Calls.  In this 70s-influenced hard rocker, the band uses their brand of slide guitar to tell a twist on the traditional Blues tale of heartache caused by a woman. A cold temptress that leaves a trail of broken hearts in her path. Play it loud. The lyric video was conceptualized and filmed by UK media artist Mila Djokic-Randolph.",
  },
  {
    youTubeId: "8p8w0IqR1kg",
    title: "The Midnight Calls - Whaddya (Official Video)",
    description:
      "Whaddya is the first single and video  from Chicago roots rock band, The Midnight Calls.  The Midnight Calls plays blues-based rock music in the vein of AC/DC, Muddy Waters, Rose Tattoo, Thin Lizzy and other classic, guitar-driven rock icons. ",
  },
  {
    youTubeId: "ba9kWpoC9_U",
    title: "The Midnight Calls - Coming Up Roses (Official Video)",
    description:
      "“Coming Up Roses” is the second single from Chicago rockers The Midnight Calls. This guitar-driven hit to the gut reflects on the out-of-reach nature of fame and the American dream. A working class scream into deaf ears from a working class Rock & Roll band.",
  },
];

const VideoPage = async () => {
  return (
    <Main>
      <Banner className="">
        <BannerHeadline>Videos</BannerHeadline>
      </Banner>
      <div className="space-y-16 lg:space-y-20">
        {videos.map(({ youTubeId, title, description }) => (
          <div key={youTubeId} className="md:container">
            <iframe
              key={youTubeId}
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${youTubeId}?si=oOjlsgFCEwaOHI5x`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            {description && (
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <p className="max-w-3xl pt-8 mx-auto text-sm text-gray-300 lg:text-base">
                  {description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Main>
  );
};

export default VideoPage;
