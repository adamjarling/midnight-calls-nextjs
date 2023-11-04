import React from "react";
import { Show } from "@/data/shows";
import useShows from "@/hooks/use-shows";

const ShowListItem = ({ show }: { show: Show }) => {
  const { getNiceDate, isPastShow } = useShows();
  const { niceDate, weekday, time, year } = getNiceDate(show);

  return (
    <div className="pb-8 mb-8 border-b border-b-gray-400">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-2xl font-semibold md:text-3xl">{niceDate}</h3>
          <p className="text-2xl font-medium uppercase">
            {weekday} {year}
          </p>
        </div>
        <div className="col-span-8 pl-3 space-y-8">
          <p className="text-2xl font-semibold uppercase">
            <a href={show.venue.url?.website} target="_blank">
              {show.venue.name}
            </a>
          </p>
          <p>{`${show.venue.city}, ${show.venue.stateProvince} ${show.venue.country}`}</p>
          {!isPastShow(show) && (
            <a
              className="inline-block button"
              href={
                show.url.ticket ||
                show.url.facebook ||
                show.venue.url?.website ||
                show.venue.url?.facebook ||
                "#"
              }
            >
              Buy tickets
            </a>
          )}
          {show.notes && <p className="text-sm">{show.notes}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShowListItem;
