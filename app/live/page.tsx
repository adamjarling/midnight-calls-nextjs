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
import enuffZPoster from "@/public/posters/2026_01_02_enuff_znuff.jpg";
import { promises as fs } from "fs";
import jackyl_forge from "@/public/images/2025_Nov_20_Jackyl_FBEvent.jpg";
import mcSpain2025 from "@/public/images/MC_Spain2025_v3.png";
import nyePoster from "@/public/posters/2025-nye-reggies.jpg";
import path from "path";
import turkeyDay from "@/public/posters/2025_11_28_live-wire.jpg";
import useShows from "@/hooks/use-shows";

export const metadata: Metadata = {
  title: "Live",
};

const sizeOf = require("image-size");

const folder = "posters";

const upcomingShowPosters = [
  {
    src: jackyl_forge,
    alt: "The Midnight Calls at The Forge with Jackyl - November 20, 2025",
    url: "https://www.ticketweb.com/event/jackyl-the-forge-tickets/14587363",
  },
  {
    src: turkeyDay,
    alt: "The Midnight Calls at Live Wire - November 28, 2025",
    url: "https://www.facebook.com/events/2656625584682845",
  },
  {
    src: nyePoster,
    alt: "The Midnight Calls at Reggies - New Years Eve 2025",
    url: "https://www.reggieslive.com/show/new-years-eve-in-the-shack",
  },
  {
    src: enuffZPoster,
    alt: "The Midnight Calls at Reggies with Enuff Z'Nuff - January 2, 2026",
    url: "",
  },
];

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
          <h3 className="py-10 text-4xl font-bold text-center md:text-6xl">
            Upcoming Shows
          </h3>
          <div className="space-y-6 xl:container">
            {upcomingShowPosters.map((poster) => (
              <div key={poster.url} className="relative flex justify-center">
                <a href={poster.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    className="w-auto max-h-[80vh]"
                  />
                </a>
              </div>
            ))}
          </div>
        </Container>

        <ShowListBig shows={currentShows as Show[]} />

        {currentShows.length === 0 && (
          <ShowListBig shows={pastShows as Show[]} />
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
