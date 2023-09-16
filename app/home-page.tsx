import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import HomeHero from "@/components/home/Hero";
import HomePhotos from "@/components/home/Photos";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import ShowsList from "@/components/shows/List";
import mcGarage from "@/public/images/mc-garage-rockin.jpg";
import { shows } from "@/data/shows";
import video1pic from "@/public/images/video/20230826_111731.jpg";
import video2pic from "@/public/images/video/20230826_112458.jpg";
import video3pic from "@/public/images/video/20230826_113602.jpg";
import video4pic from "@/public/images/video/20230826_130048.jpg";

const videoPics = [
  {
    src: video1pic,
    alt: "The Midnight Calls video shoot",
  },
  {
    src: video2pic,
    alt: "The Midnight Calls video shoot",
  },
  {
    src: video3pic,
    alt: "The Midnight Calls video shoot",
  },
  {
    src: video4pic,
    alt: "The Midnight Calls video shoot",
  },
];

export default function Home() {
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

        <Banner className="">
          <BannerHeadline>New Single...</BannerHeadline>
          <p className="">
            The Midnight Calls are debuting their debut single October 2023. Get
            ready for Whaddya! Here are some pictures from the video shoot with
            the fabulous{" "}
            <a href="https://mediamadegreat.com/" target="_blank">
              Michael Digioia
            </a>
            .
          </p>
          <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-2">
            {videoPics.map((pic, i) => (
              <div key={i}>
                <Image src={pic.src} alt={pic.alt} />
              </div>
            ))}
          </div>
          {/* <Image
            src={logo}
            className="max-w-full py-10 mx-auto md:max-w-xl"
            alt="Midnight Calls logo"
          /> */}
        </Banner>

        <Image src={mcGarage} alt="Rocking the garage" />

        <Banner className="relative z-20">
          <BannerHeadline>Upcoming Shows</BannerHeadline>
          <ShowsList shows={shows} />
        </Banner>

        <div className="flex justify-center mb-20">
          <Link href="/live" className="button">
            View All Shows
          </Link>
        </div>
        {/* <div className="flex justify-center">
          <Button href="/live">See All Shows</Button>
        </div> */}

        <HomePhotos />
      </Main>
    </>
  );
}
