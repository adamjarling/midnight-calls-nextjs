import { type Show } from "@/data/shows";

export default function getShowData(shows?: Array<Show>) {
  const currentShows: Show[] = [];
  const pastShows: Show[] = [];

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
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };

    const weekday = date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    const year = date.getFullYear();

    const niceDate = date.toLocaleDateString("en-US", options);

    return {
      niceDate,
      weekday,
      time,
      year,
    };
  };

  const isPastShow = (show: Show) => {
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
