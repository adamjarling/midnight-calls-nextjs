import { Show, shows } from "@/data/shows";

import Container from "@/components/Container";
import HeroWrapper from "./HeroWrapper";
import Image from "next/image";
import Main from "@/components/Main";
import MasonryGallery from "@/components/Masonry";
import { MasonryImage } from "@/components/Masonry";
import { Metadata } from "next";
import ShowListBig from "@/components/shows/ListBig";
import SpainPosterGrid from "@/components/PosterGrid";
import { promises as fs } from "fs";
import jjkellys from "@/public/posters/2025_09_20_jjkellys.jpg";
import mcSWFlyer from "@/public/posters/2025_02_14_SWB-MC_v3.png";
import mcSpain2025 from "@/public/images/MC_Spain2025_v3.png";
import path from "path";
import useShows from "@/hooks/use-shows";

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
        <Container>
          <div className="space-y-6 xl:container">
            <div className="relative flex justify-center">
              <Image
                src={jjkellys}
                alt="Show poster for The Midnight Calls at JJKelleys on September 20, 2025"
                className="w-auto max-h-[80vh]"
              />
            </div>
          </div>
        </Container>

        <ShowListBig shows={currentShows as Show[]} />

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
