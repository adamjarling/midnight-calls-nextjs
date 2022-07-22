import Head from "next/head";
import HomeBanner from "../components/HomeBanner";
import Image from "next/image";
import Link from "next/link";

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
        <div className="container">
          <p className="text-right">
            Photo:{" "}
            <Link href="https://www.instagram.com/bikerchickie_m/">
              <a>bikerchickie_m</a>
            </Link>
          </p>
        </div>
        <section className="container text-center mx-auto">
          <h1 className="py-10 text-5xl">
            The Midnight Calls
            <br />
            Chicago USA &#9734; Denim &apos; n Leather
          </h1>
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
          <div className="mx-auto max-w-xl py-10 text-center">
            <p className="text-5xl pb-5">&#9734;</p>
            <p className="text-2xl tracking-wider">
              Hailing from Chicago, The Midnight Calls is the brainchild of
              guitarist Adam J. Arling (The Last Vegas, Urge Overkill, Warrior
              Soul) and singer Taran de Pablos (Fierce Atmospheres, Skinwalker).
              While working together in the AC/DC tribute Black Angus, the duo
              decided to get back on the song-writing saddle and came up with a
              bunch of denim-and-leather, Blues-infused, Rock&apos;n Roll songs
              reminiscent of bands like Cheap Trick, AC/DC or Guns N&apos;
              Roses. The band&apos;s first show is scheduled for June 24th at
              Reggies. Let There Be Rock!
            </p>
            <p className="pt-10 text-lg">
              <Link href="https://www.facebook.com/themidnightcallsofficial">
                <a target="_blank" className="text-gray-500">
                  Follow on Facebook
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
