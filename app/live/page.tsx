import { Show, shows } from "@/data/shows";

import Container from "@/components/Container";
import HeroWrapper from "./HeroWrapper";
import Main from "@/components/Main";
import MasonryGallery from "@/components/Masonry";
import { MasonryImage } from "@/components/Masonry";
import { Metadata } from "next";
import ShowListBig from "@/components/shows/ListBig";
import ShowPoster from "@/components/shows/ShowPoster";
import { promises as fs } from "fs";
import path from "path";
import getShowData from "@/hooks/use-shows";

export const metadata: Metadata = {
  title: "Live",
};

const sizeOf = require("image-size");

const folder = "posters";

const Shows = async () => {
  const { currentShows, pastShows } = getShowData(shows);

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

  // Find first upcoming show with a poster
  const featuredShow = currentShows.find((show) => show.poster);

  return (
    <Main flushTop>
      <HeroWrapper />

      <div className="space-y-16">
        {featuredShow && (
          <Container>
            <ShowPoster show={featuredShow as Show} />
          </Container>
        )}

        <Container>
          <h3 className="py-10 text-4xl font-bold text-center md:text-6xl">
            Upcoming Shows
          </h3>
        </Container>

        <ShowListBig shows={currentShows as Show[]} />

        {currentShows.length === 0 && (
          <Container>
            <p className="text-center text-lg text-slate-400">
              Check back soon for show announcements!
            </p>
          </Container>
        )}

        <h3 className="py-10 text-4xl font-bold text-center md:text-6xl">
          Past Shows
        </h3>

        {images && (
          <MasonryGallery
            dir={folder}
            images={images.sort(() => Math.random() - 0.5)}
          />
        )}

        {pastShows.length > 0 && (
          <section className="container">
            <ShowListBig shows={pastShows as Show[]} />
          </section>
        )}
      </div>
    </Main>
  );
};

export default Shows;
