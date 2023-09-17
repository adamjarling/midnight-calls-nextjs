export type Show = {
  datetime: string;
  venue: string;
  location: string;
  venueUrl?: string;
  facebookEventUrl?: string;
  ticketsUrl?: string;
};

export const shows: Show[] = [
  {
    datetime: "2023-08-06T18:00:00",
    venue: "The Forge",
    location: "Joliet, IL",
    venueUrl: "",
    facebookEventUrl: "",
    ticketsUrl:
      "https://www.ticketweb.com/event/-blacktop-mojo-yet-the-forge-tickets/13266278",
  },
  {
    datetime: "2023-08-27T15:00:00",
    venue: "The Thirsty Beaver",
    location: "Crestwood, IL",
    venueUrl: "",
    facebookEventUrl: "",
    ticketsUrl: "",
  },
  {
    datetime: "2023-09-02T18:00:00",
    venue: "The Northman Riverwalk",
    location: "Chicago, IL",
    venueUrl: "",
    facebookEventUrl: "",
    ticketsUrl: "",
  },
  {
    datetime: "2023-09-09T23:00:00",
    venue: "Reggies",
    location: "Chicago, IL",
    venueUrl: "",
    facebookEventUrl: "",
    ticketsUrl: "",
  },
  {
    datetime: "2023-09-29T21:00:00",
    venue: "Live Wire Lounge",
    location: "Chicago, IL",
    venueUrl: "",
    facebookEventUrl: "",
    ticketsUrl: "",
  },
  {
    datetime: "2023-10-13T20:00:00",
    venue: "Brauerhaus",
    location: "Lombard, IL",
    venueUrl: "",
    facebookEventUrl: "",
    ticketsUrl: "",
  },
  {
    datetime: "2023-11-03T20:00:00",
    venue: "Reggies w/ Steepwater Band",
    location: "Chicago, IL",
    venueUrl: "",
    facebookEventUrl: "https://google.com",
    ticketsUrl: "",
  },
];
