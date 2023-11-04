import React from "react";
import { Show } from "@/data/shows";

interface ShowsListProps {
  shows: Show[];
}

const ShowsList: React.FC<ShowsListProps> = ({ shows }) => {
  const currentShows = shows.filter((show) => {
    const showDate = new Date(show.datetime);
    const now = new Date();
    return showDate >= now;
  });

  return (
    <ul>
      {currentShows.map((show) => (
        <li key={show.datetime} className="py-5 text-3xl">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-center justify-center md:items-start">
              <p className="">{show.datetime}</p>
              <p className="text-center md:text-left">{show.venue.name}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="md:text-right">{`${show.venue.city}, ${show.venue.stateProvince} ${show.venue.country}`}</p>
              {show.url.ticket && (
                <p className="text-xl md:text-right">
                  <a href={show.url.ticket} target="_blank" rel="noreferrer">
                    Buy Tickets
                  </a>
                </p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShowsList;
