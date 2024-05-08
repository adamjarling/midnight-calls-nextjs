import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Show, shows } from "@/data/shows";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Container from "@/components/Container";
import { ExternalLink } from "zuma-blocks";
import HomeHero from "@/components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import ShowListItem from "@/components/shows/ListItem";
import ShowsList from "@/components/shows/List";
import garageShot from "@/public/photos/mc-garage-rockin.jpg";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import mcTShirts from "@/public/images/mc-merch-table.jpg";
import rocHausPic from "@/public/photos/rochaus-full-band.jpg";
import rosesVidShoot from "@/public/photos/photo-roses-vid-shoot.jpg";
import taranLeaning from "@/public/photos/DSC01206.jpg";
import useShows from "@/hooks/use-shows";
import vixenFlyer from "@/public/posters/2024_vixen.jpg";

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
  // {
  //   youTubeId: "8p8w0IqR1kg",
  //   title: "The Midnight Calls - Whaddya (Official Video)",
  // },
];

export default function Home() {
  const { currentShows } = useShows(shows);

  return (
    <>
      <Main flushTop>
        <div className="relative">
          <HomeHero />
        </div>

        <div className="space-y-20 lg:space-y-32">
          {/* <div className="container mt-10 space-y-10 md:mt-16">
            {videos.map(({ youTubeId, title }) => (
              <iframe
                key={youTubeId}
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${youTubeId}?si=oOjlsgFCEwaOHI5x`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ))}
          </div> */}

          <div className="mt-20 space-y-6 text-center">
            <Image
              src={vixenFlyer}
              alt="The Midnight Calls with Faster Pussycat May 19, 2024 flyer"
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
