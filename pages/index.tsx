import Head from "next/head";
import HomeBanner from "../components/HomeBanner";
import Image from "next/image";
import Link from "next/link";
import NYEBanner from "../public/images/Dec31-2022-LONG.jpeg";
import JasonKane from "../public/images/Feb2023_JasonKane_Poster_PRINT.jpg";
import forgeFlyer from "../public/images/2023-april-forge.jpeg";
import forgeFlyerMobile from "../public/images/2023-april-forge-mobile.jpeg";
import forgeFlyerAug2023 from "../public/images/2023-08-06_forge_1200x1200.jpeg";

export default function Home() {
  return (
    <div className="font-statliches">
      <Head>
        <title>The Midnight Calls</title>
        <meta
          name="description"
          content="The Midnight Calls - Chicago USA Rock Band"
        />
        <link rel="icon" href="/icons8-lightning-bolt-50.png" />
      </Head>

      <main>
        <HomeBanner />

        <section className="container mx-auto">
          <div className="max-w-xl py-10 mx-auto text-center">
            <p className="pb-5 text-5xl">&#9734;</p>
            <p className="text-2xl tracking-wider">
              From Chicago USA, The Midnight Calls play denim-and-leather,
              Blues-infused, Rock&apos;n Roll songs reminiscent of bands like
              Cheap Trick, AC/DC or The Black Crowes. The band is writing
              material for its debut album slated for 2023. Let There Be Rock!
            </p>
            <div className="flex justify-center w-full pt-5 text-2xl">
              <Link href="https://www.facebook.com/themidnightcallsofficial">
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/themidnightcallsofficial/"
                className="pl-5"
              >
                Instagram
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="grid grid-cols-1 gap-10">
            <div>
              <Image
                src={forgeFlyerAug2023}
                alt="MC at the Forge August 6, 2023"
                className="mx-auto"
              />
              <h2 className="py-5 text-6xl text-center">Next Show!</h2>
              <div className="flex justify-center w-full pb-10">
                <Link
                  href="https://www.ticketweb.com/event/-blacktop-mojo-yet-the-forge-tickets/13266278"
                  target="_blank"
                  className="inline-block px-10 py-5 mx-auto text-6xl text-white bg-black hover:text-gray-300"
                >
                  Buy Tickets
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <Link
                target="_blank"
                href="https://www.ticketweb.com/event/yet-again-hazard-the-the-forge-tickets/12878045"
              >
                <Image
                  src={forgeFlyerMobile}
                  alt="April 14th at the Forge flyer"
                  className="mx-auto"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                target="_blank"
                href="https://www.ticketweb.com/event/yet-again-hazard-the-the-forge-tickets/12878045"
              >
                <Image
                  src={forgeFlyer}
                  alt="April 14th at the Forge flyer"
                  className="mx-auto"
                />
              </Link>
            </div>

            <Image
              src={JasonKane}
              alt="Jason Kane and the Jive residency poster"
              className="mx-auto"
            />

            <Image
              src="/images/Dec 31 Pipe.jpg"
              width={825}
              height={1275}
              alt="New Years Eve 2022 flyer"
              className="md:hidden"
            />

            <Image
              src={NYEBanner}
              alt="New Years Eve 2022 flyer"
              className="hidden mx-auto md:block"
            />

            <Link href="https://www.reggieslive.com/show/supersuckers-6/">
              <Image
                src="/images/Oct16SupersuckersLONG.jpeg"
                width={1267}
                height={599}
                alt="The Midnight Calls and Supersuckers flyer October 2022"
                className="hidden mx-auto md:block"
              />
            </Link>

            <Link href="https://www.reggieslive.com/show/supersuckers-6/">
              <Image
                src="/images/Oct16Supersuckers.jpeg"
                width={825}
                height={1275}
                alt="The Midnight Calls and Supersuckers flyer October 2022"
                className="mx-auto md:hidden"
              />
            </Link>

            <Image
              src="/images/Jun24TheClawsLONG.jpeg"
              width={1267}
              height={599}
              alt="The Midnight Calls and Supersuckers flyer October 2022"
              className="hidden mx-auto md:block"
            />

            <Image
              src="/images/Jun24TheClaws.jpeg"
              width={825}
              height={1275}
              alt="The Midnight Calls and Supersuckers flyer October 2022"
              className="mx-auto md:hidden"
            />
          </div>
        </section>
      </main>

      <footer className="container"></footer>
    </div>
  );
}
