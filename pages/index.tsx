import Head from "next/head";
import HomeBanner from "../components/HomeBanner";
import Image from "next/image";
import Link from "next/link";
import NYEBanner from "../public/images/Dec31-2022-LONG.jpeg";
import JasonKane from "../public/images/Feb2023_JasonKane_Poster_PRINT.jpg";

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

        <section className="py-10 text-center">
          <div className="container mx-auto">
            <p className="mb-6 text-5xl md:text-6xl xl:text-7xl">
              Wednedsay, February 8th 2023
            </p>
            <Image
              src={JasonKane}
              alt="Jason Kane and the Jive residency poster"
            />
          </div>
        </section>

        <section className="">
          <div className="md:hidden">
            <Image
              src="/images/Dec 31 Pipe.jpg"
              width={825}
              height={1275}
              alt="New Years Eve 2022 flyer"
            />
          </div>
          <div className="hidden md:block">
            <Image src={NYEBanner} alt="New Years Eve 2022 flyer" />
          </div>
        </section>
        <div className="md:hidden">
          <Link href="https://www.reggieslive.com/show/supersuckers-6/">
            <a target="_blank">
              <Image
                src="/images/Oct16Supersuckers.jpeg"
                width={825}
                height={1275}
                alt="The Midnight Calls and Supersuckers flyer October 2022"
              />
            </a>
          </Link>
          <Image
            src="/images/Jun24TheClaws.jpeg"
            width={825}
            height={1275}
            alt="The Midnight Calls and Supersuckers flyer October 2022"
          />
        </div>
        <div className="hidden md:block">
          <Link href="https://www.reggieslive.com/show/supersuckers-6/">
            <a target="_blank">
              <Image
                src="/images/Oct16SupersuckersLONG.jpeg"
                width={1267}
                height={599}
                alt="The Midnight Calls and Supersuckers flyer October 2022"
                layout="responsive"
              />
            </a>
          </Link>
          <Image
            src="/images/Jun24TheClawsLONG.jpeg"
            width={1267}
            height={599}
            alt="The Midnight Calls and Supersuckers flyer October 2022"
            layout="responsive"
          />
        </div>
        <section className="container mx-auto">
          <div className="max-w-xl py-10 mx-auto text-center">
            <p className="pb-5 text-5xl">&#9734;</p>
            <p className="text-2xl tracking-wider">
              From Chicago USA, The Midnight Calls play denim-and-leather,
              Blues-infused, Rock&apos;n Roll songs reminiscent of bands like
              Cheap Trick, AC/DC or The Black Crowes. The band is writing
              material for its debut album slated for 2023. Let There Be Rock!
            </p>
            <p className="pt-10 text-lg">
              <Link href="https://www.facebook.com/themidnightcallsofficial">
                <a target="_blank" className="text-gray-500">
                  Follow on Facebook
                </a>
              </Link>
            </p>
            <p className="text-lg">
              <Link href="https://www.instagram.com/themidnightcallsofficial/">
                <a target="_blank" className="text-gray-500">
                  Get creepy on Instagram
                </a>
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
