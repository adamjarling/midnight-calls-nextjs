import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import { Metadata } from "next";
import React from "react";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos",
};

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
              loading="lazy"
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
