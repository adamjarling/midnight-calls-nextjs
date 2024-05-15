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
import vixenFlyer from "@/public/posters/2024_vixen.jpg";
import vixenFlyerMobile from "@/public/posters/2024_vixen_square.jpg";

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

const videos = [
  {
    youTubeId: "ba9kWpoC9_U",
    title: "The Midnight Calls - Coming Up Roses (Official Video)",
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
            <div className="flex justify-center w-full">
              <Image
                src={vixenFlyer}
                alt="The Midnight Calls with Faster Pussycat May 19, 2024 flyer"
                className="hidden md:block"
              />
            </div>
            <Image
              src={vixenFlyerMobile}
              alt="The Midnight Calls with Faster Pussycat May 19, 2024 flyer"
              className="block md:hidden"
            />
            <p className="container">
              All Ages. May 19th, 2024 at{" "}
              <a
                href="https://www.vixenmchenry.com/event/faster-pussycat/"
                target="_blank"
                className="underline"
              >
                the Vixen
              </a>{" "}
              in McHenry, IL
            </p>
            <div>
              <a
                href="https://www.vixenmchenry.com/event/faster-pussycat/"
                className="inline-block button"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Tickets
              </a>
            </div>
          </div>

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
