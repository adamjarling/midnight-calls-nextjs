import { Show, shows } from "@/data/shows";

import HeroWrapper from "./HeroWrapper";
import Image from "next/image";
import Main from "@/components/Main";
import MasonryGallery from "@/components/Masonry";
import { MasonryImage } from "@/components/Masonry";
import { Metadata } from "next";
import ShowListBig from "@/components/shows/ListBig";
import { promises as fs } from "fs";
import jasonKaneGig from "@/public/posters/2024-06-12-reggies-jason-kane1.jpg";
import path from "path";
import rocHausPic from "@/public/images/2023-11-30(2).jpg";
import rockPic from "@/public/photos/DSC05518.jpg";
import useShows from "@/hooks/use-shows";
import vixenFlyer from "@/public/posters/2024_vixen.jpg";
import vixenFlyerMobile from "@/public/posters/2024_vixen_square.jpg";

export const metadata: Metadata = {
  title: "Live",
};

const sizeOf = require("image-size");

const folder = "posters";

const Shows = async () => {
  const { currentShows, pastShows } = useShows(shows);

  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );

  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  return (
    <Main flushTop>
      <HeroWrapper />

      <div className="space-y-16">
        <ShowListBig shows={currentShows as Show[]} />

        <div className="flex flex-col items-center space-y-10">
          <div>
            <Image
              src={vixenFlyer}
              alt="The Midnight Calls with Faster Pussycat May 19, 2024 flyer"
              className="hidden md:block"
            />
            <Image
              src={vixenFlyerMobile}
              alt="The Midnight Calls with Faster Pussycat May 19, 2024 flyer"
              className="inline-block md:hidden"
            />
          </div>

          <Image
            src={jasonKaneGig}
            alt="Live at Reggies"
            className="inline-block"
          />
        </div>

        {currentShows.length === 0 && (
          <ShowListBig shows={pastShows as Show[]} />
        )}

        <h3 className="py-10 text-4xl font-bold text-center md:text-6xl">
          Past Shows
        </h3>

        {images && <MasonryGallery dir={folder} images={images.reverse()} />}

        {currentShows.length > 0 && (
          <section className="container">
            <ShowListBig shows={pastShows as Show[]} />
          </section>
        )}
      </div>
    </Main>
  );
};

export default Shows;
