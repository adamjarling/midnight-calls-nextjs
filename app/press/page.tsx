"use client";

import { Button, HeroImage } from "zuma-blocks";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
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
          <Banner>
            <BannerHeadline>Bio</BannerHeadline>
          </Banner>
          <p>
            From Chicago USA, The Midnight Calls play denim-and-leather,
            Blues-infused, Rock&apos;n Roll songs reminiscent of bands like
            Cheap Trick, AC/DC or The Black Crowes. The band is writing material
            for its debut album slated for 2023. Let There Be Rock!
          </p>
          <p>More coming soon...</p>
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
