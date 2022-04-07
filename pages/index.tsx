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
            {/* <div className={styles.flag}>
              <Image
                src={`/images/chicago-flag.png`}
                alt="chicago flag"
                width={40}
                height={25}
              />
            </div> */}
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
