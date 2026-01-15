import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerText from "@/components/banner/Text";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import { Metadata } from "next";
import SpainTourAnnouncement from "@/components/SpainTourAnnouncement";
import logoGrey from "@/public/images/logo/the-midnight-calls-logo-transparent.png";
import logoWhite from "@/public/images/logo/tmc-logo-2026-white.png";
import mcPhoto1 from "@/public/photos/tmc-band-photo-2026-4.jpg";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Press Pack",
};

const PressPack = () => {
  return (
    <Main flushTop={false}>
      <div className="space-y-16">
        <div className="mt-8">
          <Container>
            <BannerHeadline>Press Photos</BannerHeadline>
          </Container>

          <div className="relative flex items-center justify-center mt-8">
            <Image
              className="w-auto max-h-[80vh]"
              src={mcPhoto1}
              alt="Midnight Calls promo picture"
            />
          </div>
        </div>

        <div>
          <Banner>
            <BannerHeadline>Logos</BannerHeadline>
          </Banner>
          <section className="container">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <Image
                  src={logoGrey}
                  alt="Midnight Calls logo black and white"
                />
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

        <SpainTourAnnouncement />
      </div>
    </Main>
  );
};

export default PressPack;
