import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import { Metadata } from "next";
import SpainTourAnnouncement from "@/components/SpainTourAnnouncement";
import logoBW from "@/public/images/logo/mc-logo-outline_white.png";
import logoWhite from "@/public/images/logo/mc-logo_white.png";
import mcPhoto1 from "@/public/images/the-midnight-calls_promo-pic.jpg";
import mcPhotoCloseup from "@/public/images/the-midnight-calls_promo-pic-closeup.jpg";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Press Pack",
};

const PressPack = () => {
  return (
    <Main flushTop={false}>
      <div className="space-y-16">
        <SpainTourAnnouncement />

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
            <BannerHeadline>Videos</BannerHeadline>
            {videos.map(({ youTubeId, title }) => (
              <iframe
                key={youTubeId}
                className="w-full mt-5 aspect-video"
                src={`https://www.youtube.com/embed/${youTubeId}?si=oOjlsgFCEwaOHI5x`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ))}
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

export default PressPack;
