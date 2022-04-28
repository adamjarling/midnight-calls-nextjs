import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import styles2 from "../styles/Home.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Midnight Calls</title>
        <meta
          name="description"
          content="The Midnight Calls - Chicago USA Rock Band"
        />
        <link rel="icon" href="/icons8-lightning-bolt-50.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>
        <div className={styles2.firefly}></div>

        <section>
          <div className={styles.centered}>
            <h1 className={styles.title}>The Midnight Calls</h1>
            <a
              href="https://reggieslive.com/show/the-claws/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={`/images/poster-reggies-2022-06-24-IG.jpeg`}
                alt="The Midnight Calls at Reggies poster"
                width={1200}
                height={1200}
              />
            </a>
            <div className={styles.textWrap}>
              <p>
                The Midnight Calls howl at the moon in and around Chicago USA.
              </p>
              <p>
                Debut gig at{" "}
                <a
                  href="https://reggieslive.com/show/the-claws/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reggies
                </a>{" "}
                Friday, June 24 w/ The Claws
              </p>
              <p>
                <a href="https://www.ticketweb.com/event/the-claws-the-midnight-reggies-music-joint-tickets/12004405">
                  Buy tickets
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
