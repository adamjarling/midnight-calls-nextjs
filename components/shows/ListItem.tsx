import React from "react";
import { Show } from "@/data/shows";
import useShows from "@/hooks/use-shows";

const ShowListItem = ({ show }: { show: Show }) => {
  const { getNiceDate } = useShows();
  const { niceDate, weekday, time } = getNiceDate(show);

  return (
    <div className="pb-8 mb-8 border-b border-b-gray-400">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-2xl font-semibold md:text-3xl">{niceDate}</h3>
          <p className="text-2xl font-medium uppercase">{weekday}</p>
        </div>
        <div className="col-span-8 pl-3 space-y-8">
          <p className="text-2xl font-semibold uppercase">
            <a href={show.venueUrl} target="_blank">
              {show.venue}
            </a>
          </p>
          <p>{show.location}</p>
          <a
            className="inline-block button"
            href={
              show.ticketsUrl || show.facebookEventUrl || show.venueUrl || "#"
            }
          >
            Buy tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowListItem;
