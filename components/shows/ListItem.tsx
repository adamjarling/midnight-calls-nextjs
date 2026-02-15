import React from "react";
import { Show } from "@/data/shows";
import getShowData from "@/hooks/use-shows";

const ShowListItem = ({ show }: { show: Show }) => {
  const { getNiceDate, isPastShow } = getShowData();
  const { niceDate, weekday, time, year } = getNiceDate(show);

  return (
    <div className="pb-8 mb-8 border-b border-b-gray-400">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {/* Date */}
        <div className="md:w-1/3 md:shrink-0">
          <h3 className="text-3xl font-semibold md:text-3xl mb-2">{niceDate}</h3>
          <div className="flex gap-2 text-xl font-medium uppercase md:flex-col md:gap-1">
            <span>
              {weekday} {year}
            </span>
            <span className="text-lg">{time}</span>
          </div>
        </div>

        {/* Venue info */}
        <div className="space-y-4">
          <p className="text-xl font-semibold uppercase md:text-2xl">
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
          <p className="text-slate-300">{`${show.venue.city}, ${show.venue.stateProvince} ${show.venue.country}`}</p>

          {!isPastShow(show) && (
            <div className="flex flex-col gap-3 sm:flex-row">
              {(show.url.ticket || show.venue.url?.website) && (
                <a
                  className="block text-center button min-h-[44px] leading-normal"
                  href={show.url.ticket || show.venue.url?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy tickets
                </a>
              )}

              {(show.url.facebook || show.venue.url?.facebook) && (
                <a
                  className="block text-center button min-h-[44px] leading-normal"
                  href={show.url.facebook || show.venue.url?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              )}
            </div>
          )}
          {show.notes && <p className="text-base text-slate-400">{show.notes}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShowListItem;
