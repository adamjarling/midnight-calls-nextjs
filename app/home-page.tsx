import { Show, shows } from "@/data/shows";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ResponsiveImage from "@/components/ResponsiveImage";
import ShowListItem from "@/components/shows/ListItem";
import SincePromo from "@/components/SincePromo";
import aprilForge from "@/public/photos/DSC05536.jpeg";
import bigStagePic from "@/public/photos/DSC05874.jpeg";
import classicRock from "@/public/images/classic-rock-8-bands-to-hear.webp";
import forgeStagePic from "@/public/photos/20240831_202753.jpg";
import garageShot from "@/public/photos/mc-garage-rockin.jpg";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import mcSWFlyer from "@/public/posters/2025_02_14_SWB-MC_v3.png";
import reggiesRockin from "@/public/images/2024-06-12-reggies.jpeg";
import reggiesRockinMobile from "@/public/photos/20240612_202834.jpg";
import taranLeaning from "@/public/photos/DSC01206.jpg";
import taranScreaming from "@/public/photos/DSC09196.jpeg";
import useShows from "@/hooks/use-shows";
import vixen1 from "@/public/photos/20240519_185543.jpg";

const homePics = [
  {
    src: mcPhoto1,
    alt: "The Midnight Calls photo shoot",
  },
  {
    src: vixen1,
    alt: "The Midnight Calls Whaddya vid shoot",
  },
  {
    src: bigStagePic,
    alt: "Roc haus",
  },
  {
    src: forgeStagePic,
    alt: "Live with Living Colour",
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

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/tpHGded-Ung?si=X5aT2dxLg2S-UO3G"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

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
