"use client";

import Image from "next/image";
import React from "react";
import cafeCentral from "@/public/posters/CafeCentral_Rock.jpeg";
import frank from "@/public/posters/mc_frank-meyer_2025.jpeg";
import masMusica from "@/public/posters/MasMusica_Rock.jpeg";
import mc from "@/public/posters/MCSpainMCClubIdea_w_dates.png";
import mcSpain2025 from "@/public/images/MC_Spain2025_v3.png";
import motos from "@/public/posters/Motos_Pink.jpeg";
import valladolid from "@/public/posters/2025_Valladolid.jpg";
import zaragoza from "@/public/posters/zaragoza.jpeg";
import zzRock from "@/public/posters/ZZ_Pink.jpeg";

const posters = [
  //   {
  //     src: mcSpain2025,
  //     alt: "The Midnight Calls Spain Tour 2025",
  //   },
  {
    src: zaragoza,
    alt: "The Midnight Calls Sala Creedence Zaragoza",
  },
  {
    src: masMusica,
    alt: "The Midnight Calls Mas Musica",
  },
  { src: frank, alt: "The Midnight Calls Frank Meyer" },
  {
    src: valladolid,
    alt: "The Midnight Calls Valladolid poster",
  },
  {
    src: cafeCentral,
    alt: "The Midnight Calls Cafe Central",
  },
  {
    src: motos,
    alt: "The Midnight Calls Motos",
  },
  {
    src: zzRock,
    alt: "The Midnight Calls ZZ Rock",
  },
  {
    src: mc,
    alt: "The Midnight Calls Motorcyle Club poster",
  },
];

const SpainPosterGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {posters.map((pic, i) => (
          <Image key={i} src={pic.src} alt={pic.alt} />
        ))}
      </div>
    </section>
  );
};

export default SpainPosterGrid;
