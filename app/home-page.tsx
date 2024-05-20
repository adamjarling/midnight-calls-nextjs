import { Show, shows } from "@/data/shows";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import HomeHero from "@/components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ShowListItem from "@/components/shows/ListItem";
import garageShot from "@/public/photos/mc-garage-rockin.jpg";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import rocHausPic from "@/public/photos/rochaus-full-band.jpg";
import taranLeaning from "@/public/photos/DSC01206.jpg";
import useShows from "@/hooks/use-shows";
import classicRock from "@/public/images/classic-rock-8-bands-to-hear.webp";

const homePics = [
  {
    src: rocHausPic,
    alt: "The Midnight Calls video shoot",
  },
  {
    src: taranLeaning,
    alt: "The Midnight Calls",
  },
  {
    src: mcPhoto1,
    alt: "The Midnight Calls photo shoot",
  },
  {
    src: garageShot,
    alt: "The Midnight Calls Whaddya vid shoot",
  },
];

export default function Home() {
  const { currentShows } = useShows(shows);

  return (
    <>
      <Main flushTop>
        <div className="space-y-20 lg:space-y-32">
          <div className="relative">
            <HomeHero />
          </div>

          <div className="mt-20 space-y-6 text-center">
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="max-w-3xl mb-5 text-2xl md:text-4xl">
                Classic Rock Magazine
                <br />
                The best new rock songs you need to hear right now
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
                Put in your vote for The Midnight Calls new single "So Cold" as
                one of the best new rock songs you need to hear right now!
                Alongside fellow artists Nathaniel Rateliff, Black Smoke
                Trigger, The Cold Stares and more. Click the link below to vote!
              </p>
            </div>
            <div>
              <a
                href="https://www.loudersound.com/features/tracks-of-the-week-may-20-2024"
                className="inline-block button"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vote Now
              </a>
            </div>
          </div>

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/0EN_QF5trtU?si=WO3DKH9d4X50ZmY8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

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

          <Container>
            <Banner className="relative z-0">
              <BannerHeadline>Upcoming Shows</BannerHeadline>
            </Banner>

            <div className="max-w-3xl mx-auto">
              <ul>
                {currentShows.length > 0 &&
                  currentShows.slice(0, 2).map((show) => (
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
        </div>
      </Main>
    </>
  );
}
