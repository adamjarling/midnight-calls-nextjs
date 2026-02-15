import { Show, shows } from "@/data/shows";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Main from "@/components/Main";
import ShowListItem from "@/components/shows/ListItem";
import ShowPoster from "@/components/shows/ShowPoster";
import SincePromo from "@/components/SincePromo";
import adamMalaga from "@/public/photos/505117059_775036738193147_3844990692697810430_n.jpg";
import classicRock from "@/public/images/classic-rock-8-bands-to-hear.webp";
import coolCrowd from "@/public/photos/IMG_7642.jpg";
import getShowData from "@/hooks/use-shows";
import homeSplash from "@/public/photos/505318457_775036008193220_1042307814692525926_n.jpg";
import homeSplashMobile from "@/public/photos/505443704_775035508193270_2202194173097249010_n.jpg";
import sean from "@/public/photos/505590872_775036394859848_3960217479809390153_n.jpg";
import valladolidRocking from "@/public/photos/20250601_225932.jpeg";
import vixenJake from "@/public/photos/540479843_758329336943658_7874683605367703828_n.jpg";

const homePics = [
  {
    src: coolCrowd,
    alt: "Live at the Forge",
  },
  {
    src: valladolidRocking,
    alt: "The Midnight Calls on stage in Valladolid, Spain",
  },
  {
    src: sean,
    alt: "Rocking in Spain",
  },
  {
    src: adamMalaga,
    alt: "Spain rocks",
  },
];

export default function Home() {
  const { currentShows } = getShowData(shows);

  // Find first upcoming show with a poster
  const featuredShow = currentShows.find((show) => show.poster);

  return (
    <>
      <Main flushTop>
        <div className="space-y-20 lg:space-y-32">
          {/* Hero - CSS responsive images */}
          <Image
            src={homeSplashMobile}
            alt="The Midnight Calls"
            className="block lg:hidden w-full h-auto"
            priority
          />
          <Image
            src={homeSplash}
            alt="The Midnight Calls"
            className="hidden lg:block w-full h-auto"
            priority
          />

          <div className="max-w-2xl px-6 mx-auto text-center">
            <p className="text-xl md:text-2xl font-mono italic leading-relaxed mb-6 uppercase">
              &quot;These Chicago blues rockers have listened to a tonne of
              Aerosmith, Stones and AC/DC records... Warm, swaggering 70s hard
              rock, spiced with bluesy slide guitar for a southern-tinged
              finish... Tasty.&quot;
            </p>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/classic-rock-logo.png"
                alt="Classic Rock Magazine"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-lg font-mono font-medium">2024</p>
            </div>
          </div>

          {/* Featured Show Poster */}
          {featuredShow && (
            <Container>
              <ShowPoster show={featuredShow as Show} />
            </Container>
          )}

          {/* Shows */}
          <Container>
            <Banner className="relative z-0">
              <BannerHeadline>Upcoming Shows</BannerHeadline>
            </Banner>

            <div className="max-w-3xl mx-auto">
              <ul>
                {currentShows.length > 0 &&
                  currentShows.slice(0, 3).map((show) => (
                    <li key={show.datetime}>
                      <ShowListItem show={show as Show}></ShowListItem>
                    </li>
                  ))}
                {currentShows.length === 0 && (
                  <p className="text-center">
                    Check back soon for show announcements!
                  </p>
                )}
              </ul>
              <div className="flex justify-end mb-20">
                <Link href="/live" className="button">
                  View All Shows
                  <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </Container>

          {/* Photos */}
          <section>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {homePics.map((pic, i) => (
                <Link href="/photos" key={i}>
                  <Image src={pic.src} alt={pic.alt} loading="lazy" />
                </Link>
              ))}
            </div>
            <div className="relative z-40 block pt-10 text-center">
              <Link href="/photos" className="button">
                View All Photos
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

          <SincePromo />

          {/* Classic Rock Magazine */}
          <section className="mt-20 space-y-6 text-center">
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="max-w-sm mb-5 text-2xl md:max-w-2xl md:text-4xl">
                Classic Rock Magazine
                <br />
                &quot;So Cold&quot; - The best new rock songs you need to hear
                right now
              </h2>
              <a
                href="https://www.loudersound.com/features/tracks-of-the-week-may-20-2024"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={classicRock}
                  alt="Classic Rock Magazine - vote for The Midnight Calls new single flyer"
                  loading="lazy"
                />
              </a>
            </div>

            <div className="container text-center">
              <p className="max-w-3xl m-auto">
                Classic Rock magazine featured &quot;So Cold&quot; as one of the
                best new rock songs you need to hear right now the week of May
                20, 2024. Alongside fellow artists Nathaniel Rateliff, Black
                Smoke Trigger, The Cold Stares and more, The Midnight Calls
                finished in a strong 2nd place.
              </p>
            </div>
            <div>
              <a
                href="https://www.loudersound.com/features/tracks-of-the-week-may-20-2024"
                className="inline-block button"
                target="_blank"
                rel="noreferrer noopener"
              >
                Check it out
              </a>
            </div>
          </section>

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/0EN_QF5trtU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </Main>
    </>
  );
}
