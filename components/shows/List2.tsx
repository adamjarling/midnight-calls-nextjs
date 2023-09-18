"use-client";

import React from "react";
import { Show } from "@/data/shows";

const ShowsList2 = ({ shows }: { shows: Show[] }) => {
  return (
    <ul className="mb-10">
      {shows.map((show) => (
        <li
          key={show.datetime}
          className="flex items-center justify-between w-full py-6 border-b border-gray-800"
        >
          <div className="flex flex-col w-1/2 md:w-2/3 lg:w-3/4 md:flex-row">
            <h3>{show.datetime}</h3>
            <div className="flex flex-col lg:flex-row md:pl-10">
              <div>{show.venue} @</div>
              <div className="lg:pl-16">{show.location}</div>
            </div>
          </div>
          <div className="">RSVP</div>
        </li>
      ))}
    </ul>
  );
};

export default ShowsList2;
