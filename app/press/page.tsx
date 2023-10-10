"use client";

import { Button, HeroImage } from "zuma-blocks";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import logoBW from "@/public/images/logo/mc-logo-outline_white.png";
import logoBlue from "@/public/images/logo/Blue.png";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import mcPhotoCloseup from "@/public/images/the-midnight-calls_promo-pic-closeup.jpg";

const About = () => {
  return (
    <Main flushTop={false}>
      <div className="space-y-16">
        <div>
          <Banner>
            <BannerHeadline>Press Photos</BannerHeadline>
          </Banner>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Image src={mcPhoto1} alt="Midnight Calls promo picture" />
            </div>
            <div>
              <Image
                src={mcPhotoCloseup}
                alt="Midnight Calls promo picture close-up"
              />
            </div>
          </div>
        </div>

        <section className="max-w-4xl px-6 mx-auto">
          <BannerHeadline>Bio</BannerHeadline>
          <BannerText>
            <p>
              &apos;Whaddya&apos; is the first single and video from Chicago
              roots rock band, The Midnight Calls. The Midnight Calls plays
              blues-based rock music in the vein of AC/DC, Muddy Waters, Rose
              Tattoo, Thin Lizzy and other classic, guitar-driven rock icons.
              The Midnight Calls perform regularly at clubs and festivals around
              the south side of Chicago, and will be releasing their first
              full-length album Spring 2024. Boom. Let&apos;s rock.
            </p>
          </BannerText>
        </section>
        <div>
          <Banner>
            <BannerHeadline>Logos</BannerHeadline>
          </Banner>
          <section className="container">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <Image src={logoBW} alt="Midnight Calls logo black and white" />
              </div>
              <div>
                <Image src={logoBlue} alt="Midnight Calls logo blue" />
              </div>
            </div>
          </section>
        </div>
        <div>
          <Banner>
            <BannerHeadline>Stage Plot</BannerHeadline>
          </Banner>
        </div>
        <div>
          <Banner>
            <BannerHeadline>Contact</BannerHeadline>
            <p className="pt-5">themidnightcallsofficial [at] gmail.com</p>
          </Banner>
        </div>
      </div>
    </Main>
  );
};

export default About;
