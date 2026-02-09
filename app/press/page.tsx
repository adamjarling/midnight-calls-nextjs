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

        {/* Bio - English */}
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl text-center md:text-4xl">About</h2>
            <p className="text-base text-slate-300 leading-relaxed">
              The Midnight Calls are a band from Chicago that plays
              classic-style rock and roll with 70s and Southern touches.
              Although they are an American group, they have a singer from
              Segovia, Taran de Pablos, who emigrated to the Windy City more
              than two decades ago. Alongside him are guitarists Adam Arling
              (The Last Vegas, Urge Overkill, Warrior Soul) and Tony McQuaid
              (Loudmouth, Frank Bang &amp; the Secret Stash), bassist Sean
              Barnes, and drummer Chuck Harling. Their music is strongly
              influenced by the Blues and by bands like Aerosmith, The Rolling
              Stones, and AC/DC. With catchy melodies and guitars turned up to
              11 as the main ingredients, The Midnight Calls&apos; musical
              recipe doesn&apos;t try to surprise us but instead brings us
              those recognizable flavors of American Blues Rock served with the
              elegance and expertise expected of seasoned musicians who have
              spent half their lives on the road on stages in America and
              Europe.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Since their formation in 2022, the band has been playing
              regularly, sharing the stage with bands like Living Colour,
              Supersuckers, The Steepwater Band, Faster Pussycat, Blacktop
              Mojo, and Jason Kane &amp; The Jive, among others.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              The Midnight Calls have already released four singles:
              &quot;Whaddya,&quot; &quot;Coming Up Roses,&quot; &quot;So
              Cold,&quot; and their latest track, &quot;Since I&apos;ve Been
              Thinking.&quot; For the latter, they collaborated with Chris
              Grove (Survivor, Joel Hoekstra, Eddie Money, The Steepwater
              Band) on keyboards.
            </p>
          </div>
        </Container>

        {/* Bio - Spanish */}
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl text-center md:text-4xl">Biografía</h2>
            <p className="text-base text-slate-300 leading-relaxed">
              The Midnight Calls son una banda de Chicago y hacen Rocanrol de
              estilo clásico con toques setenteros y sureños. Aún siendo un
              grupo americano, cuentan en sus filas con el cantante segoviano,
              Taran de Pablos que emigró a la ciudad del viento hace ya más de
              dos décadas. A su lado se encuentran los guitarristas Adam
              Arling (The Last Vegas, Urge Overkill, Warrior Soul) y Tony
              McQuaid (Loudmouth, Frank Bang &amp; the Secret Stash), el
              bajista Sean Barnes y el batería Chuck Harling. Su música está
              fuertemente influenciada por el Blues y por bandas como
              Aerosmith, The Rolling Stones o AC/DC. Con melodías pegadizas y
              guitarras al 10 como principales ingredientes, la receta musical
              de The Midnight Calls no trata de sorprendernos sino que nos
              trae esos sabores reconocibles del Blues Rock americano servidos
              con la elegancia y el buen hacer que se espera de músicos
              curtidos en mil batallas que llevan media vida haciendo
              carretera en escenarios de América y Europa.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Desde su creación en 2022, la banda ha estado tocando
              regularmente, compartiendo escenario con bandas como Living
              Colour, Supersuckers, The Steepwater Band, Faster Pussycat,
              Blacktop Mojo, o Jason Kane &amp; The Jive entre otras.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              The Midnight Calls han lanzado ya cuatro sencillos, &quot;Whaddya&quot;,
              &quot;Coming Up Roses&quot;, &quot;So Cold&quot; y su último tema,
              &quot;Since I&apos;ve Been Thinking&quot;. Para estos últimos han
              contado con la colaboración de Chris Grove (Survivor, Joel
              Hoekstra, Eddie Money, The Steepwater Band) a los teclados.
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
