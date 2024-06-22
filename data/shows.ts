export type Venue = {
  name: string;
  city: string;
  stateProvince: string;
  country: string;
  url?: {
    facebook?: string;
    website?: string;
  };
};

export type Show = {
  datetime: string;
  notes?: string;
  venue: Venue;
  url: {
    facebook: string;
    image: string;
    ticket: string;
  };
};

export const shows: Show[] = [
  {
    datetime: "2022-06-24T20:00:00",
    notes: "with The Claws LA",
    venue: {
      name: "Reggies w/ The Claws",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2022-10-16T20:00:00",
    notes: "with The Supersuckers and Handcuffs",
    venue: {
      name: "Reggies w/ Supersuckers",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2022-12-31T20:00:00",
    notes: "New Years Eve!",
    venue: {
      name: "Reggies",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2023-02-08T20:00:00",
    notes: "With Jason Kane and the Jive",
    venue: {
      name: "Reggies",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2023-08-06T18:00:00",
    venue: {
      name: "The Forge",
      city: "Joliet",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/brauerhouse",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.ticketweb.com/event/-blacktop-mojo-yet-the-forge-tickets/13266278",
    },
  },
  {
    datetime: "2023-08-27T15:00:00",
    venue: {
      name: "The Thirsty Beaver",
      city: "Crestwood",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2023-09-02T18:00:00",
    venue: {
      name: "The Northman Riverwalk",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {},
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2023-09-09T23:00:00",
    venue: {
      name: "Reggies",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://www.reggieslive.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2023-09-29T21:00:00",
    venue: {
      name: "Live Wire Lounge",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://www.livewireloungechicago.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1455762108550997",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2023-10-13T20:00:00",
    venue: {
      name: "Brauerhaus",
      city: "Lombard",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/brauerhouse",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/791160879220768",
      image: "",
      ticket:
        "https://www.eventbrite.com/e/free-friday-the-13th-rock-show-pipe-death-pop-radio-the-midnight-calls-tickets-688117256237?aff=ebdsoporgprofile",
    },
  },
  {
    datetime: "2023-11-03T20:00:00",
    venue: {
      name: "Reggies w/ Steepwater Band",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://www.reggieslive.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/261198586242307",
      image: "https://www.reggieslive.com/",
      ticket:
        "https://www.ticketweb.com/event/the-steepwater-band-the-reggies-banannas-shack-tickets/13622988",
    },
  },
  {
    datetime: "2023-11-30T20:00:00",
    venue: {
      name: "Rochaus",
      city: "West Dundee",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://rochaus.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-02-02T21:00:00",
    venue: {
      name: "115 Bourbon Street",
      city: "Merrionette Park",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/115BourbonStreet/",
        website: "https://www.115bourbonstreet.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-03-08T21:00:00",
    venue: {
      name: "Liars Club",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/liarsclubchicago/",
        website: "https://www.liarsclubstore.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-05-19T18:00:00",
    venue: {
      name: "The Vixen",
      city: "McHenry",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/vixmchenry",
        website: "https://www.vixenmchenry.com/",
      },
    },
    notes: "with Faster Pussycat",
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.etix.com/ticket/p/54878196/faster-pussycat-wmidnight-calls-mchenry-the-vixen",
    },
  },
  {
    datetime: "2024-06-12T19:00:00",
    venue: {
      name: "Reggies",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://www.reggieslive.com/show/jason-kane-the-jive-20/",
      },
    },
    notes: "with Jason Kane and the Jive",
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.ticketweb.com/event/jason-kane-the-jive-reggies-music-joint-tickets/13370724",
    },
  },
  {
    datetime: "2024-06-23T14:00:00",
    venue: {
      name: "Thirsty Beaver",
      city: "Crestwood",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/thirstybeavercrestwood/",
        website: "https://www.thirstybeaverpubandgrub.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/387731674248265",
      image: "",
      ticket: "",
    },
    notes: "Free Show!",
  },
  {
    datetime: "2024-06-29T18:00:00",
    venue: {
      name: "The Northman Riverwalk",

      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/thenorthmanriverwalk",
        website: "https://www.thenorthman.com/",
      },
    },
    notes:
      "Free Show! On the Chicago River at the Riverwalk at Northman Cidery",
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-08-02T21:00:00",
    notes:
      "with Black Angus and The Evictions.  Adam is fleeing the country goodbye show!",
    venue: {
      name: "Live Wire Lounge",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://livewireloungechicago.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
];
