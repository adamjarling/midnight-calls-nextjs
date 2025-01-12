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
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Press Pack",
};

const PressPack = () => {
  return (
    <Main flushTop={false}>
      <div className="space-y-16">
        <div>
          <Container className="mt-12 mb-10">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/0EN_QF5trtU?si=WO3DKH9d4X50ZmY8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Container>
        </div>

        <section className="max-w-4xl px-6 mx-auto">
          <BannerHeadline>Bio</BannerHeadline>
          <BannerText>
            <div className="leading-relaxed lg:text-xl">
              <p>
                The Midnight Calls is a denim and leather Rock & Roll outfit
                from Chicago. The band is fronted by Spain-born singer,{" "}
                <a
                  href="https://www.facebook.com/taran.depablos"
                  target="_blank"
                >
                  Taran de Pablos
                </a>
                and features guitarists Adam Arling (The Last Vegas, Urge
                Overkill, Warrior Soul) and Tony McQuaid (Loudmouth, Frank Bang
                & the Secret Stash), bassist Sean Barnes and drummer Chuck
                Harling.
              </p>

              <p>
                Their music is heavily influenced by the blues-infused sounds of
                classic bands like Aerosmith, The Rolling Stones or AC/DC. With
                a recipe based on grooves, hooks, and loud guitars as the main
                ingredients, The Midnight Calls are not reinventing the Rock &
                Roll wheel, but rather rolling it down the road with the swagger
                and style that you would expect from road-tested musicians that
                have toured the US and Europe a few times over.
              </p>

              <p>
                Since their inception in late 2022, The Midnight Calls have
                released three singles, “Whaddya”, “Coming Up Roses”, “So Cold”
                and their latest song, “Since I've Been Thinking” which features
                Chris Grove (Survivor, Joel Hoekstra, Eddie Money) on keyboards.
              </p>
              <p>
                While developing their music in the studio, the band has stayed
                active, sharing the stage with national acts like The
                Supersuckers, Living Colour, The Steepwater Band, Faster
                Pussycat, Blacktop Mojo, Jason Kane & The Jive amongst others.
                The Midnight Calls with release their first full-length album,
                expected summer 2025, with Europe touring plans to follow.
              </p>
            </div>
          </BannerText>
        </section>

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
