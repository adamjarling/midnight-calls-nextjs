import { Show, shows } from "@/data/shows";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import MasonryGallery from "@/components/Masonry";
import { MasonryImage } from "@/components/Masonry";
import ShowsList2 from "@/components/shows/List2";
import { promises as fs } from "fs";
import path from "path";
import useShows from "@/hooks/use-shows";

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
    <Main>
      <Banner className="md:py-20">
        <BannerHeadline>Live</BannerHeadline>
      </Banner>

      <div className="space-y-16">
        <div className="container">
          <ShowsList2 shows={currentShows as Show[]} />
        </div>
        {images && <MasonryGallery dir={folder} images={images} />}
        <section className="container">
          <h3 className="text-2xl font-bold">Past Shows</h3>
          <ShowsList2 shows={pastShows as Show[]} />
        </section>
      </div>
    </Main>
  );
};

export default Shows;
