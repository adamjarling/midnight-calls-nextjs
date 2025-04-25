"use client";

import React, { useState } from "react";

import Image from "next/image";
import mcSpain2025 from "@/public/images/MC_Spain2025_v3.png";

const spanishNews = `
    <p>
      <i>8 de abril de 2025</i> - The Midnight Calls anuncian fechas para
      su gira por España que comenzará a finales de mayo.
    </p>
    <p>
      The Midnight Calls son una banda de Chicago y hacen Rocanrol de
      estilo clásico con toques setenteros y sureños. Aún siendo un
      grupo americano, cuentan en sus filas con el cantante segoviano,
      Taran de Pablos que emigró a la ciudad del viento hace ya más de
      dos décadas. A su lado se encuentran los guitarristas Adam
      Arling (The Last Vegas, Urge Overkill, Warrior Soul) y Tony
      McQuaid (Loudmouth, Frank Bang & the Secret Stash), el bajista
      Sean Barnes y el batería Chuck Harling. Su música está
      fuertemente influenciada por el Blues y por bandas como
      Aerosmith, The Rolling Stones o AC/DC. Con melodías pegadizas y
      guitarras al 10 como principales ingredientes, la receta musical
      de The Midnight Calls no trata de sorprendernos sino que nos
      trae esos sabores reconocibles del Blues Rock americano servidos
      con la elegancia y el buen hacer que se espera de músicos
      curtidos en mil batallas que llevan media vida haciendo
      carretera en escenarios de América y Europa.
    </p>
    <p>
      Desde su creación en 2022, la banda ha estado tocando
      regularmente, compartiendo escenario con bandas como Living
      Colour, Supersuckers, The Steepwater Band, Faster Pussycat,
      Blacktop Mojo, o Jason Kane & The Jive entre otras.
    </p>
    <p>
      The Midnight Calls han lanzado ya cuatro sencillos, “Whaddya”,
      “Coming Up Roses”, “So Cold” y su último tema, “Since I’ve Been
      Thinking”. Para estos últimos han contado con la colaboración de
      Chris Grove (Survivor, Joel Hoekstra, Eddie Money, The
      Steepwater Band) a los teclados.
    </p>
    <p>
      The Midnight Calls traerán a España su show de alto voltaje
      rocanrolero que incluirá los temas de su álbum de debut. Mira
      las fechas para saber dónde y cuándo serán las paradas de su
      gira por la península.
    </p>
  `;

const englishNews = `
    <p>
      <i>April 8, 2025</i> - The Midnight Calls announce dates for their tour of Spain, which will begin at the end of May.
    </p>
    <p>
      The Midnight Calls are a band from Chicago that plays classic-style rock and roll with 70s and Southern touches. Although they are an American group, they have a singer from Segovia, Taran de Pablos, who emigrated to the Windy City more than two decades ago. Alongside him are guitarists Adam Arling (The Last Vegas, Urge Overkill, Warrior Soul) and Tony McQuaid (Loudmouth, Frank Bang & the Secret Stash), bassist Sean Barnes, and drummer Chuck Harling. Their music is strongly influenced by the Blues and by bands like Aerosmith, The Rolling Stones, and AC/DC. With catchy melodies and guitars turned up to 11 as the main ingredients, The Midnight Calls' musical recipe doesn't try to surprise us but instead brings us those recognizable flavors of American Blues Rock served with the elegance and expertise expected of seasoned musicians who have spent half their lives on the road on stages in America and Europe.
    </p>
    <p>
      Since their formation in 2022, the band has been playing regularly, sharing the stage with bands like Living Colour, Supersuckers, The Steepwater Band, Faster Pussycat, Blacktop Mojo, and Jason Kane & The Jive, among others.
    </p>
    <p>
      The Midnight Calls have already released four singles: “Whaddya,” “Coming Up Roses,” “So Cold,” and their latest track, “Since I’ve Been Thinking.” For the latter, they collaborated with Chris Grove (Survivor, Joel Hoekstra, Eddie Money, The Steepwater Band) on keyboards.
    </p>
    <p>
      The Midnight Calls will bring their high-voltage rock and roll show to Spain, which will include tracks from their debut album. Check the dates to find out where and when their tour will stop on the peninsula.
    </p>
  `;

function SpainTourAnnouncement() {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={mcSpain2025}
        alt="Spain Tour Poster 2025"
        className="w-full h-auto max-w-3xl mb-8"
        priority
      />
      <div className="container lg:max-w-3xl">
        <div className="flex justify-center mb-3 lg:justify-end">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 mb-2 text-sm font-medium uppercase border"
          >
            {isEnglish ? "Ver en Español" : "View in English"}
          </button>
        </div>
        {isEnglish ? (
          <div>
            <h2 className="pb-4 text-xl lg:text-3xl">
              The Midnight Calls announce dates for their tour of Spain, which
              will begin at the end of May.
            </h2>
            <p className="italic">April 8, 2025</p>
            <p className="mb-2">
              The Midnight Calls are a band from Chicago that plays
              classic-style rock and roll with 70s and Southern touches.
              Although they are an American group, they have a singer from
              Segovia, Taran de Pablos, who emigrated to the Windy City more
              than two decades ago. Alongside him are guitarists Adam Arling
              (The Last Vegas, Urge Overkill, Warrior Soul) and Tony McQuaid
              (Loudmouth, Frank Bang & the Secret Stash), bassist Sean Barnes,
              and drummer Chuck Harling. Their music is strongly influenced by
              the Blues and by bands like Aerosmith, The Rolling Stones, and
              AC/DC. With catchy melodies and guitars turned up to 11 as the
              main ingredients, The Midnight Calls' musical recipe doesn't try
              to surprise us but instead brings us those recognizable flavors of
              American Blues Rock served with the elegance and expertise
              expected of seasoned musicians who have spent half their lives on
              the road on stages in America and Europe.
            </p>
            <p className="mb-2">
              Since their formation in 2022, the band has been playing
              regularly, sharing the stage with bands like Living Colour,
              Supersuckers, The Steepwater Band, Faster Pussycat, Blacktop Mojo,
              and Jason Kane & The Jive, among others.
            </p>
            <p className="mb-2">
              The Midnight Calls have already released four singles: “Whaddya,”
              “Coming Up Roses,” “So Cold,” and their latest track, “Since I’ve
              Been Thinking.” For the latter, they collaborated with Chris Grove
              (Survivor, Joel Hoekstra, Eddie Money, The Steepwater Band) on
              keyboards.
            </p>
            <p>
              The Midnight Calls will bring their high-voltage rock and roll
              show to Spain, which will include tracks from their debut album.
              Check the dates to find out where and when their tour will stop on
              the peninsula.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="pb-4 text-xl lg:text-3xl">
              The Midnight Calls anuncian fechas para su gira por España que
              comenzará a finales de mayo.
            </h2>
            <p className="italic">
              <i>April 8, 2025</i>
            </p>
            <p className="mb-2">
              The Midnight Calls son una banda de Chicago y hacen Rocanrol de
              estilo clásico con toques setenteros y sureños. Aún siendo un
              grupo americano, cuentan en sus filas con el cantante segoviano,
              Taran de Pablos que emigró a la ciudad del viento hace ya más de
              dos décadas. A su lado se encuentran los guitarristas Adam Arling
              (The Last Vegas, Urge Overkill, Warrior Soul) y Tony McQuaid
              (Loudmouth, Frank Bang & the Secret Stash), el bajista Sean Barnes
              y el batería Chuck Harling. Su música está fuertemente
              influenciada por el Blues y por bandas como Aerosmith, The Rolling
              Stones o AC/DC. Con melodías pegadizas y guitarras al 10 como
              principales ingredientes, la receta musical de The Midnight Calls
              no trata de sorprendernos sino que nos trae esos sabores
              reconocibles del Blues Rock americano servidos con la elegancia y
              el buen hacer que se espera de músicos curtidos en mil batallas
              que llevan media vida haciendo carretera en escenarios de América
              y Europa.
            </p>
            <p className="mb-2">
              Desde su creación en 2022, la banda ha estado tocando
              regularmente, compartiendo escenario con bandas como Living
              Colour, Supersuckers, The Steepwater Band, Faster Pussycat,
              Blacktop Mojo, o Jason Kane & The Jive entre otras.
            </p>
            <p className="mb-2">
              The Midnight Calls han lanzado ya cuatro sencillos, “Whaddya”,
              “Coming Up Roses”, “So Cold” y su último tema, “Since I’ve Been
              Thinking”. Para estos últimos han contado con la colaboración de
              Chris Grove (Survivor, Joel Hoekstra, Eddie Money, The Steepwater
              Band) a los teclados.
            </p>
            <p>
              The Midnight Calls traerán a España su show de alto voltaje
              rocanrolero que incluirá los temas de su álbum de debut. Mira las
              fechas para saber dónde y cuándo serán las paradas de su gira por
              la península.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpainTourAnnouncement;
