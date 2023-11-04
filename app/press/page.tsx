import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import { Metadata } from "next";
import logoBW from "@/public/images/logo/mc-logo-outline_white.png";
import logoWhite from "@/public/images/logo/mc-logo_white.png";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import mcPhotoCloseup from "@/public/images/the-midnight-calls_promo-pic-closeup.jpg";

export const metadata: Metadata = {
  title: "Press Pack",
};

const About = () => {
  return (
    <Main flushTop={false}>
      <div className="space-y-16">
        <div>
          {/* <Banner>
            <BannerHeadline>Press Pack</BannerHeadline>
          </Banner> */}

          <Container className="mb-10">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/8p8w0IqR1kg?si=ko2yuy5QBobKdzP1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Container>
        </div>

        <div>
          <Container>
            <BannerHeadline>Press Photos</BannerHeadline>
          </Container>

          <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2">
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
            <div className="leading-relaxed lg:text-xl">
              <p>
                &apos;Whaddya&apos; is the first single and video from Chicago
                roots rock band, The Midnight Calls. The Midnight Calls plays
                blues-based rock music in the vein of AC/DC, Muddy Waters, Rose
                Tattoo, Thin Lizzy and other classic, guitar-driven rock icons.
                The Midnight Calls perform regularly at clubs and festivals
                around the south side of Chicago, and will be releasing their
                first full-length album Spring 2024.
              </p>
              <p>
                The Midnight Calls features experienced musicians from the
                Chicago scene who&apos;ve toured the world with bands including
                Loudmouth, Head On, The Last Vegas, Urge Overkill, Skinwalker
                and the Wooly Rhinos.
              </p>
              <p>
                The Midnight Calls are:
                <ul>
                  <li>Taran De Pablos - Vocals</li>
                  <li>Tony McQuaid - Guitar</li>
                  <li>Sean Barnes - Bass</li>
                  <li>Adam Arling - Guitar</li>
                  <li>Chuck Harling - Drums</li>
                </ul>
              </p>
            </div>
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
                <Image src={logoWhite} alt="Midnight Calls logo blue" />
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
