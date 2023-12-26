import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Show, shows } from "@/data/shows";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Container from "@/components/Container";
import HomeHero from "@/components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import ShowListItem from "@/components/shows/ListItem";
import ShowsList from "@/components/shows/List";
import garageShot from "@/public/photos/mc-garage-rockin.jpg";
import mcTShirts from "@/public/images/mc-merch-table.jpg";
import rocHausPic from "@/public/photos/rochaus-full-band.jpg";
import rosesVidShoot from "@/public/photos/photo-roses-vid-shoot.jpg";
import taranLeaning from "@/public/photos/DSC01206.jpg";
import useShows from "@/hooks/use-shows";

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
    src: rosesVidShoot,
    alt: "The Midnight Calls Roses shoot",
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
        {/* <ParallaxHero
          imageUrl="/images/5L9A2266.jpg"
          // headline="Parallax Banner goes here"
          altText="The Midnight Calls band photo"
          // subHeadline="Some random subheadline content can go here to describe something"
          // Button={<Button cb={() => console.log("yo")}>Get Started</Button>}
        /> */}

        <div className="relative">
          {/* Top gradient overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black to-transparent" /> */}
          <HomeHero />
        </div>

        <div className="space-y-10">
          <div className="container my-10 md:my-16">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/8p8w0IqR1kg?si=ko2yuy5QBobKdzP1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {/* <div className="hidden grid-cols-1 gap-3 mt-5 md:grid md:grid-cols-2">
            {videoPics.map((pic, i) => (
              <div key={i}>
                <Image src={pic.src} alt={pic.alt} />
              </div>
            ))}
          </div> */}
          </div>

          <section className="">
            <Container className="max-w-4xl text-center">
              <Image src={mcTShirts} alt="Midnight Calls T-shirts" />
              <p className="text-center">
                The merchandise table lookin&apos; legit. Collectors edition
                T-shirts, Stickers and Guitar Picks now available.
              </p>
            </Container>
          </section>

          <Container>
            <Banner className="relative z-20">
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

          <div>
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
          </div>
        </div>

        {/* <div className="flex justify-center">
          <Button href="/live">See All Shows</Button>
        </div> */}
      </Main>
    </>
  );
}
