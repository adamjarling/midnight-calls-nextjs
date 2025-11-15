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
  {
    datetime: "2024-08-24T20:00:00",
    notes: "",
    venue: {
      name: "Austin Community Tavern",
      city: "Steger",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://austincommunitytavern.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/3739711742942462",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-11-06T20:00:00",
    notes: "",
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
      facebook: "https://www.facebook.com/events/471826992314224",
      image: "",
      ticket:
        "https://www.ticketweb.com/event/supersuckers-the-atomic-bitchwax-the-reggies-rock-club-tickets/13856903",
    },
  },
  {
    datetime: "2025-02-14T19:00:00",
    notes: "",
    venue: {
      name: "Martyrs",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "",
        website: "https://martyrslive.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1642588282958104",
      image: "",
      ticket: "https://martyrslive.com/fri-feb-14th-doors-7pm-show-8pm-20",
    },
  },
  {
    datetime: "2025-01-27T21:00:00",
    notes: "Private Event - Reggies / Liars Club Staff Holiday Party",
    venue: {
      name: "Reggies",
      city: "Chicago",
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
    datetime: "2025-03-23T13:00:00",
    notes: "Early afternoon festival show",
    venue: {
      name: "Rochaus",
      city: "West Dundee",
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
    datetime: "2025-04-12T20:00:00",
    notes: "",
    venue: {
      name: "Austin Community Tavern",
      city: "Steger",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/austincommunitytavern",
        website: "https://austincommunitytavern.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-05-03T20:00:00",
    notes: "",
    venue: {
      name: "Tony Ds",
      city: "Elmwood Park",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/TonyDsEP/",
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
    datetime: "2025-05-16T20:00:00",
    notes: "",
    venue: {
      name: "The Forge",
      city: "Joliet",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/theforgelive",
        website: "https://theforgelive.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.ticketweb.com/event/witchhammer-the-midnight-calls-chains-the-forge-tickets/14330713",
    },
  },
  {
    datetime: "2025-05-29T20:00:00",
    notes: "GIRA ESPAÑA 2025! w/ Jason Kane and the Jive",
    venue: {
      name: "Sala Creedence",
      city: "Zaragoza",
      stateProvince: "Aragón",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/salacreedence/",
        website: "https://creedencesound.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-05-30T20:00:00",
    notes: "GIRA ESPAÑA 2025!",
    venue: {
      name: "MásMúsica",
      city: "Ávila",
      stateProvince: "Castilla y León",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/josemasmusica",
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
    datetime: "2025-05-31T20:00:00",
    notes: "GIRA ESPAÑA 2025! w/ Frank Meyer (The Streetwalkin' Cheetahs)",
    venue: {
      name: "Infinity",
      city: "Palencia",
      stateProvince: "Castilla y León",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/p/Sala-Infinity-100041851091623/",
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
    datetime: "2025-06-01T16:00:00",
    notes: "GIRA ESPAÑA 2025! w/ Sixty Nine Souls!",
    venue: {
      name: "Porta Caeli",
      city: "Valladolid",
      stateProvince: "Castilla y León",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/salaportacaeli/",
        website: "https://portacaeli.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-06-03T20:00:00",
    notes: "GIRA ESPAÑA 2025!",
    venue: {
      name: "Trooper",
      city: "Cangas do Morrazo",
      stateProvince: "Galicia",
      country: "Spain",
      url: {
        facebook: "",
        website: "https://sites.google.com/view/thetrooperpub/inicio",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-06-05T22:30:00",
    notes: "GIRA ESPAÑA 2025!",
    venue: {
      name: "Café Teatro Central",
      city: "Baeza",
      stateProvince: "Andalucía",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/cafeteatrocentral/",
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
    datetime: "2025-06-06T22:30:00",
    notes: "GIRA ESPAÑA 2025!",
    venue: {
      name: "ZZ Pub",
      city: "Málaga",
      stateProvince: "Andalucía",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/ZZPUB",
        website: "https://www.zzpub.es/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-06-07T20:00:00",
    notes: "GIRA ESPAÑA 2025!",
    venue: {
      name: "La Guarida del Angel",
      city: "Jerez de la Frontera",
      stateProvince: "Andalucía",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/laguaridadelangel/",
        website: "https://laguaridadelangel.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },

  {
    datetime: "2025-06-08T16:00:00",
    notes: "GIRA ESPAÑA 2025! Early show",
    venue: {
      name: "Bar de las Motos",
      city: "Benalmedena",
      stateProvince: "Andalucía",
      country: "Spain",
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
    datetime: "2025-06-27T20:00:00",
    notes: "w/ Jason Kane and the Jive",
    venue: {
      name: "Reggies Live",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/reggiesrockclub",
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
    datetime: "2025-08-29T19:00:00",
    notes: "w/ LA Guns",
    venue: {
      name: "The Vixen",
      city: "McHenry",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/vixmchenry/",
        website: "https://vixenmchenry.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "https://www.etix.com/ticket/p/59506578/laguns-mchenry-the-vixen",
    },
  },
  {
    datetime: "2025-09-20T19:30:00",
    notes: "w/ Pipe and Highwired",
    venue: {
      name: "JJ Kelleys Pub",
      city: "Lansing",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/pages/JJ-Kellys/220724348046855",
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
    datetime: "2025-11-16T18:00:00",
    notes: "w/ Pat Travers Band",
    venue: {
      name: "West Chicago Social Club",
      city: "West Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/TheWCSocialClub/",
        website: "https://www.thewcsocialclub.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1161786215815330",
      image: "",
      ticket:
        "https://skeletix.com/3870-pat-travers-the-wc-social-club-2025-11-16/",
    },
  },
  {
    datetime: "2025-11-20T18:30:00",
    notes: "w/ Jackyl",
    venue: {
      name: "The Forge",
      city: "Joliet",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/theforgelive",
        website: "https://www.theforgelive.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1553968025733528",
      image: "",
      ticket:
        "https://www.ticketweb.com/event/jackyl-the-forge-tickets/14587363",
    },
  },
  {
    datetime: "2025-12-31T20:00:00",
    notes: "NEW YEARS EVE w/ Sunvolume",
    venue: {
      name: "Reggies",
      city: "Chicago",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/reggiesrockclub",
        website: "https://www.reggieslive.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
];
