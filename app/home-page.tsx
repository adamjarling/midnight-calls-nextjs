import { Show, shows } from "@/data/shows";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ResponsiveImage from "@/components/ResponsiveImage";
import ShowListItem from "@/components/shows/ListItem";
import SincePromo from "@/components/SincePromo";
import SpainPosterGrid from "@/components/PosterGrid";
import SpainTourAnnouncement from "@/components/SpainTourAnnouncement";
import bigStagePic from "@/public/photos/DSC05874.jpeg";
import classicRock from "@/public/images/classic-rock-8-bands-to-hear.webp";
import forgeStagePic from "@/public/photos/20240831_202753.jpg";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import mcSpain2025 from "@/public/images/MC_Spain2025_v3.png";
import reggiesRockin from "@/public/images/2024-06-12-reggies.jpeg";
import reggiesRockinMobile from "@/public/photos/20240612_202834.jpg";
import spain1 from "@/public/photos/20250606_003253.jpg";
import spain2 from "@/public/photos/DSC06377.jpeg";
import spain3 from "@/public/photos/DSC05708.jpeg";
import useShows from "@/hooks/use-shows";
import vixen from "@/public/posters/2025_08_29_vixen.jpeg";

const homePics = [
  {
    src: spain1,
    alt: "Rocking in Spain",
  },
  {
    src: mcPhoto1,
    alt: "The Midnight Calls photo shoot",
  },
  {
    src: spain3,
    alt: "Roc haus",
  },
  {
    src: spain2,
    alt: "Spain rocks",
  },
];

export default function Home() {
  const { currentShows } = useShows(shows);

  return (
    <>
      <Main flushTop>
        <div className="space-y-20 lg:space-y-32">
          <ResponsiveImage
            mobileSrc={reggiesRockinMobile}
            desktopSrc={reggiesRockin}
            alt="The Midnight Calls"
          />

          <Container>
            <div className="space-y-6 xl:container">
              <div className="relative flex justify-center">
                <Image
                  src={vixen}
                  alt="Show poster for The Midnight Calls at The Vixen in McHenry, IL on August 29, 2025"
                  className="w-auto max-h-[80vh]"
                />
              </div>

              <div className="flex justify-center">
                <a className="button" href="#" target="_blank">
                  Buy Tickets
                </a>
              </div>
            </div>
          </Container>

          <SincePromo />

          {/* Shows */}
          <Container>
            <Banner className="relative z-0">
              <BannerHeadline>Upcoming Shows</BannerHeadline>
            </Banner>

            <div className="max-w-3xl mx-auto">
              <ul>
                {currentShows.length > 0 &&
                  currentShows.slice(0, 3).map((show) => (
                    <li key={show.datetime}>
                      <ShowListItem show={show as Show}></ShowListItem>
                    </li>
                  ))}
                {currentShows.length === 0 && (
                  <p className="text-center">
                    Check back soon for show announcements!
                  </p>
                )}
              </ul>
              <div className="flex justify-end mb-20">
                <Link href="/live" className="button">
                  View All Shows
                  <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </Container>

          {/* Photos */}
          <section>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {homePics.map((pic, i) => (
                <Link href="/photos" key={i}>
                  <Image src={pic.src} alt={pic.alt} />
                </Link>
              ))}
            </div>
            <div className="relative z-40 block pt-10 text-center">
              <Link href="/photos" className="button">
                View All Photos
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

          <SpainTourAnnouncement />

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/0EN_QF5trtU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Classic Rock Magazine */}
          <div className="mt-20 space-y-6 text-center">
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="max-w-3xl mb-5 text-2xl md:text-4xl">
                Classic Rock Magazine
                <br />
                "So Cold" - The best new rock songs you need to hear right now
              </h2>
              <a
                href="https://www.loudersound.com/features/tracks-of-the-week-may-20-2024"
                className=""
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={classicRock}
                  alt="Classic Rock Magazine - vote for The Midnight Calls new single flyer"
                />
              </a>
            </div>

            <div className="container text-center">
              <p className="max-w-3xl m-auto">
                Classic Rock magazine featured "So Cold" as one of the best new
                rock songs you need to hear right now the week of May 20, 2024.
                Alongside fellow artists Nathaniel Rateliff, Black Smoke
                Trigger, The Cold Stares and more, The Midnight Calls finished
                in a strong 2nd place.
              </p>
            </div>
            <div>
              <a
                href="https://www.loudersound.com/features/tracks-of-the-week-may-20-2024"
                className="inline-block button"
                target="_blank"
                rel="noreferrer noopener"
              >
                Check it out
              </a>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
