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
          <div className="flex flex-col gap-0 text-2xl font-medium uppercase">
            <span className="">
              {weekday} {year}
            </span>
            <span className="text-lg">{time}</span>
          </div>
        </div>
        <div className="col-span-8 pl-3 space-y-8">
          <p className="text-2xl font-semibold uppercase">
            {show.venue.url?.website ? (
              <a
                href={show.venue.url?.website}
                target="_blank"
                className="underline"
              >
                {show.venue.name}
              </a>
            ) : (
              show.venue.name
            )}
          </p>
          <p>{`${show.venue.city}, ${show.venue.stateProvince} ${show.venue.country}`}</p>
          {!isPastShow(show) && (
            <>
              {(show.url.ticket || show.venue.url?.website) && (
                <a
                  className="inline-block button"
                  href={show.url.ticket || show.venue.url?.website}
                >
                  Buy tickets
                </a>
              )}

              {(show.url.facebook || show.venue.url?.facebook) && (
                <a
                  className="inline-block lg:ml-3 button"
                  href={show.url.facebook || show.venue.url?.facebook}
                >
                  Facebook
                </a>
              )}
            </>
          )}
          {show.notes && <p className="text-base">{show.notes}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShowListItem;
