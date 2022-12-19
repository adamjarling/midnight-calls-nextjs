import Head from "next/head";
import HomeBanner from "../components/HomeBanner";
import Image from "next/image";
import Link from "next/link";
import NYEBanner from "../public/images/Dec31-2022-LONG.jpeg";

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
        <section className="container mx-auto text-center">
          <h1 className="py-10 text-5xl">
            The Midnight Calls
            <br />
            Chicago USA &#9734; Denim &apos; n Leather
          </h1>
        </section>
        <section className="mx-auto mb-10 text-center">
          <a
            className=""
            href="https://www.ticketweb.com/event/new-years-eve-2023-featuring-reggies-music-joint-tickets/12650055"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={NYEBanner} alt="New Years Eve 2022 flyer" />
          </a>
          <a
            className="inline-block p-5 my-6 text-2xl text-white bg-black hover:text-gray-200"
            href="https://www.ticketweb.com/event/new-years-eve-2023-featuring-reggies-music-joint-tickets/12650055"
            target="_blank"
            rel="noreferrer"
          >
            Get Tickets
          </a>
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
              From from Chicago USA, The Midnight Calls play denim-and-leather,
              Blues-infused, Rock&apos;n Roll songs reminiscent of bands like
              Cheap Trick, AC/DC or Guns N&apos; Roses. The band is writing
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
