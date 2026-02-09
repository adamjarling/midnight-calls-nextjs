import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import Main from "@/components/Main";
import { Metadata } from "next";
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
        {/* Band Photo */}
        <div className="mt-8">
          <Container>
            <BannerHeadline>Press Pack</BannerHeadline>
          </Container>

          <div className="relative flex items-center justify-center mt-8">
            <Image
              className="w-auto max-h-[80vh]"
              src={mcPhoto1}
              alt="The Midnight Calls - band photo"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl">About</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              The Midnight Calls are a blues rock band from Chicago featuring
              Taran De Pablos, Adam J. Arling, Tony McQuaid, Sean Barnes and
              Chuck Harling. Their music is strongly influenced by the Blues and
              by bands like Aerosmith, The Rolling Stones, and AC/DC.
            </p>
          </div>
        </Container>

        {/* Music - Spotify Embed */}
        <Container>
          <Banner>
            <BannerHeadline>Music</BannerHeadline>
          </Banner>
          <div className="max-w-3xl mx-auto">
            <iframe
              src="https://open.spotify.com/embed/artist/6rcObgTuaf4s9uaOEK68D9?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </Container>

        {/* Videos */}
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
                loading="lazy"
              ></iframe>
            ))}
          </Banner>
        </div>

        {/* Logos */}
        <div>
          <Banner>
            <BannerHeadline>Logos</BannerHeadline>
          </Banner>
          <section className="container">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <a
                href="/images/logo/the-midnight-calls-logo-transparent.png"
                download
                className="block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={logoGrey}
                  alt="Midnight Calls logo - black and white"
                  loading="lazy"
                />
                <p className="text-center text-sm text-slate-400 mt-2">
                  Click to download
                </p>
              </a>
              <a
                href="/images/logo/tmc-logo-2026-white.png"
                download
                className="block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={logoWhite}
                  alt="Midnight Calls logo - blue"
                  loading="lazy"
                />
                <p className="text-center text-sm text-slate-400 mt-2">
                  Click to download
                </p>
              </a>
            </div>
          </section>
        </div>

        {/* Contact */}
        <div>
          <Banner>
            <BannerHeadline>Contact</BannerHeadline>
            <p className="pt-5 text-lg">
              themidnightcallsofficial [at] gmail.com
            </p>
          </Banner>
        </div>
      </div>
    </Main>
  );
};

export default PressPack;
