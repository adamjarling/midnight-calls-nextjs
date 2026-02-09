import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Music",
};

const singles = [
  {
    hyperfollowLink:
      "https://distrokid.com/hyperfollow/themidnightcalls/since-ive-been-thinking",
    title: "Since I've Been Thinking",
    type: "Single",
    releaseDate: "2024",
    cover: "/images/since_single_cover-final.jpeg",
    description:
      "\u201CSince I\u2019ve Been Thinking\u201D is the fourth single by Chicago rockers, The Midnight Calls. In this track, the band digs into its Midwest roots producing a melodic Rock & Roll display reminiscent of classic Illinois bands like Cheap Trick, REO Speedwagon or Enuff Z\u2019Nuff. Play it loud!  Filmed, edited, and directed by Michael DiGioia (https://www.mikedphoto.com)",
    youTubeId: "tpHGded-Ung",
  },
  {
    hyperfollowLink:
      "https://distrokid.com/hyperfollow/themidnightcalls/so-cold",
    title: "So Cold",
    type: "Single",
    releaseDate: "2024",
    cover: "/images/so-cold_single-cover.png",
    description:
      "\u201CSo Cold\u201D is the third single by Chicago rockers The Midnight Calls.  In this 70s-influenced hard rocker, the band uses their brand of slide guitar to tell a twist on the traditional Blues tale of heartache caused by a woman. A cold temptress that leaves a trail of broken hearts in her path. Play it loud. The lyric video was conceptualized and filmed by UK media artist Mila Djokic-Randolph.",
    youTubeId: "0EN_QF5trtU",
  },
  {
    hyperfollowLink:
      "https://distrokid.com/hyperfollow/themidnightcalls/whaddya",
    title: "Whaddya",
    type: "Single",
    releaseDate: "2023",
    cover: "/images/whaddya_single-cover.jpg",
    description:
      "Whaddya is the first single and video  from Chicago roots rock band, The Midnight Calls.  The Midnight Calls plays blues-based rock music in the vein of AC/DC, Muddy Waters, Rose Tattoo, Thin Lizzy and other classic, guitar-driven rock icons.",
    youTubeId: "8p8w0IqR1kg",
  },
  {
    hyperfollowLink:
      "https://distrokid.com/hyperfollow/themidnightcalls/coming-up-roses",
    title: "Coming Up Roses",
    type: "Single",
    releaseDate: "2024",
    cover: "/images/roses-single-cover-v4-3.jpg",
    description:
      "\u201CComing Up Roses\u201D is the second single from Chicago rockers The Midnight Calls. This guitar-driven hit to the gut reflects on the out-of-reach nature of fame and the American dream. A working class scream into deaf ears from a working class Rock & Roll band.",
    youTubeId: "ba9kWpoC9_U",
  },
];

const MusicPage = async () => {
  return (
    <Main>
      <Banner className="">
        <BannerHeadline>Music</BannerHeadline>
      </Banner>

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {singles.map(
            ({
              hyperfollowLink,
              title,
              description,
              cover,
              type,
              releaseDate,
              youTubeId,
            }) => (
              <div
                key={hyperfollowLink}
                className="flex flex-col items-center mb-12 space-y-4 opacity-90 hover:opacity-100"
              >
                <Image
                  src={cover}
                  alt={title}
                  width={1600}
                  height={1600}
                  className="w-full h-auto max-w-full"
                  loading="lazy"
                />

                <h3 className="p-0 m-0 text-2xl text-center">{title}</h3>

                <div className="flex items-center justify-center w-full gap-3 text-gray-300">
                  <span>Release Date: {releaseDate}</span>
                  <span>({type})</span>
                </div>

                {description && (
                  <p className="text-sm text-center text-gray-300 max-w-3xl mx-auto lg:text-base">
                    {description}
                  </p>
                )}

                <div className="flex flex-col w-full gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    className="block text-center button"
                    target="_blank"
                    href={hyperfollowLink}
                  >
                    Listen
                  </Link>
                  <Link
                    className="block text-center button"
                    href={`https://youtu.be/${youTubeId}`}
                    target="_blank"
                  >
                    Official Video
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </Main>
  );
};

export default MusicPage;
