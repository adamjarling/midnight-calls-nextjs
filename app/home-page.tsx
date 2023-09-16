"use client";

import { Button, HeroImage } from "zuma-blocks";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import ShowsList from "@/components/shows/List";
import logo from "public/images/logo/mc-logo-outline_white.png";
import mcGarage from "@/public/images/mc-garage-rockin.jpg";
import { motion } from "framer-motion";
import { shows } from "@/data/shows";

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
          <HeroImage
            images={[
              {
                mediaQuery: `(max-width: 640px)`,
                src: "/images/the-midnight-calls_promo-pic-mobile.jpg ",
                srcSet: "/images/the-midnight-calls_promo-pic-mobile2.jpg",
              },
              {
                mediaQuery: "(min-width: 641px)",
                src: "/images/the-midnight-calls_promo-pic.jpg",
                srcSet: "/images/the-midnight-calls_promo-pic.jpg",
              },
              // {
              //   mediaQuery: "",
              //   src: "/images/the-midnight-calls_promo-pic.jpg",
              //   srcSet: "/images/the-midnight-calls_promo-pic.jpg",
              // },
            ]}
          />
        </div>

        <Banner className="">
          <BannerHeadline>New Single...</BannerHeadline>
          <p className="">
            The Midnight Calls are debuting their debut single October 2023. Get
            ready for Whaddya!
          </p>
          <Image
            src={logo}
            className="max-w-full py-10 mx-auto md:max-w-xl"
            alt="Midnight Calls logo"
          />
        </Banner>

        <Image src={mcGarage} alt="Rocking the garage" />

        <Banner className="relative z-20">
          <BannerHeadline>Upcoming Shows</BannerHeadline>
          <ShowsList shows={shows} />
        </Banner>
        <div className="flex justify-center">
          <Button href="/live">See All Shows</Button>
        </div>
      </Main>
    </>
  );
}
