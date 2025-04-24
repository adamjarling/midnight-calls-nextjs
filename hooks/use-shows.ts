import { type Show } from "@/data/shows";

export default function useShows(shows?: Array<Show>) {
  const payload = {
    currentShows: [],
    pastShows: [],
    sorted: [],
  };
  const currentShows: Show[] = [];
  const pastShows: Show[] = [];

  //if (!shows || shows.length === 0) return payload;

  const sorted = shows
    ? shows.sort((a, b) => {
        const aDate = new Date(a.datetime);
        const bDate = new Date(b.datetime);

        return aDate < bDate ? -1 : aDate === bDate ? 0 : 1;
      })
    : [];

  sorted.forEach((show) => {
    const showDate = new Date(show.datetime);
    const now = new Date();
    if (showDate >= now) {
      currentShows.push(show);
    } else {
      pastShows.unshift(show);
    }
  });

  const getNiceDate = (show: Show) => {
    const date = new Date(show.datetime);
    const options = {
      month: "short",
      day: "numeric",
    };

    const hours = date.getHours();
    const weekday = date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    const year = date.getFullYear();

    // @ts-ignore
    const niceDate = date.toLocaleDateString("en-US", options);

    return {
      niceDate,
      weekday,
      time,
      year,
    };
  };

  const isPastShow = (show: Show) => {
    // return true if show is in the past
    const showDate = new Date(show.datetime);
    const now = new Date();
    return showDate < now;
  };

  return {
    currentShows,
    getNiceDate,
    isPastShow,
    pastShows,
    sorted,
  };
}
