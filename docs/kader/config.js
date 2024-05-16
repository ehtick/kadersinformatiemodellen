var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "DRAFT",
  shortName: "kadersinformatiemodellen/kader",
  specType: "technische documentatie", // vrije tekst, kleine letter
  imprint: "digigo",
  editors: [
    // alleen `name` is verplicht, https://respec.org/docs/#person
    {
      name: "Niels Vossebeld",
      company: "digiGO",
    },
  ],
  authors: [
    // alleen `name` is verplicht, https://respec.org/docs/#person
    {
      name: "Wouter Klein Wolterink",
      company: "digiGO",
    },
    {
      name: "Henk Hutink",
      company: "digiGO",
    },
  ],
  github: "https://github.com/nl-digigo/kadersinformatiemodellen",
  license: "cc-by",
  lint: { "no-unused-dfns": false },
  localBiblio: {
    BOMOS_fundament: {
      title: "BOMOS, het fundament",
      href: "https://gitdocumentatie.logius.nl/publicatie/bomos/fundament/",
      status: "Actueel",
      publisher: "Logius",
    },
  },
  maxTocLevel: 3,
};
