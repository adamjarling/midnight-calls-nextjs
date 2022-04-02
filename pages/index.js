import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
        <section>
          <div className={styles.content}>
            <h2>THE MIDNIGHT CALLS</h2>
            <h2>THE MIDNIGHT CALLS</h2>
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
