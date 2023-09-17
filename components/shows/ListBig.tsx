import Container from "../Container";
import React from "react";
import { Show } from "@/data/shows";

const ShowListBig = ({ shows }: { shows: Show[] }) => {
  return (
    <Container className="max-w-3xl">
      <ul>
        {shows.map((show) => {
          const date = new Date(show.date);
          const options = {
            //weekday: "short",
            //year: "numeric",
            month: "short",
            day: "numeric",
          };
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const ampm = hours >= 12 ? "pm" : "am";

          // @ts-ignore
          const niceDate = date.toLocaleDateString("en-US", options);

          return (
            <li
              key={show.date}
              className="pb-8 mb-8 border-b border-b-gray-400"
            >
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <h3 className="text-2xl font-semibold">{niceDate}</h3>
                </div>
                <div className="col-span-8 pl-3 space-y-8">
                  <p className="text-2xl font-semibold uppercase">
                    <a href={show.venueUrl} target="_blank">
                      {show.venue}
                    </a>
                  </p>
                  <p>{show.location}</p>
                  <a className="inline-block button" href={show.ticketsUrl}>
                    Buy tickets
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ShowListBig;
