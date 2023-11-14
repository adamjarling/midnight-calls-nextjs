import { Show, shows } from "@/data/shows";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Container from "@/components/Container";
import HomeHero from "@/components/home/Hero";
import HomePhotos from "@/components/home/Photos";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import ShowListItem from "@/components/shows/ListItem";
import ShowsList from "@/components/shows/List";
import mcGarage from "@/public/images/mc-garage-rockin.jpg";
import rocHausPic from "@/public/images/2023-11-30(2).jpg";
import useShows from "@/hooks/use-shows";
import video1pic from "@/public/images/video/20230826_111731.jpg";
import video3pic from "@/public/images/video/20230826_113602.jpg";

const videoPics = [
  {
    src: video1pic,
    alt: "The Midnight Calls video shoot",
  },
  {
    src: video3pic,
    alt: "The Midnight Calls video shoot",
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

        <div className="container my-10 md:my-16">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/8p8w0IqR1kg?si=ko2yuy5QBobKdzP1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="hidden grid-cols-1 gap-3 mt-5 md:grid md:grid-cols-2">
            {videoPics.map((pic, i) => (
              <div key={i}>
                <Image src={pic.src} alt={pic.alt} />
              </div>
            ))}
          </div>
        </div>

        <Container>
          <Banner className="relative z-20">
            <BannerHeadline>Upcoming Shows</BannerHeadline>
          </Banner>

          <Image src={rocHausPic} alt="RocHaus" className="mx-auto mb-16" />

          <ul>
            {currentShows.length > 0 &&
              currentShows.slice(0, 2).map((show) => (
                <li key={show.datetime}>
                  <ShowListItem show={show as Show}></ShowListItem>
                </li>
              ))}
          </ul>
          <div className="flex justify-end mb-20">
            <Link href="/live" className="button">
              View All Shows
              <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
            </Link>
          </div>
        </Container>

        {/* <div className="flex justify-center">
          <Button href="/live">See All Shows</Button>
        </div> */}

        <HomePhotos />
      </Main>
    </>
  );
}
