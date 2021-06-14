import { IField } from "../Categories/Categories";

interface IProposals {
    title: string;
    fields: IField[];
  }

export const proposals: IProposals[] = [
    {
      title: "Name",
      fields: [
        {
          options: [
            {
              key: "name",
              value: "Operation m50",
            },
            {
              key: "name",
              value: "Operation m51",
            },
            {
              key: "name",
              value: "Operation m52",
            },
          ],
        },
        {
          options: [
            {
              key: "name",
              value: "Operation bondi",
            },
            {
              key: "name",
              value: "Operation mondi",
            },
            {
              key: "name",
              value: "Operation tondi",
            },
          ],
        },
        {
          options: [
            {
              key: "name",
              value: "Op. Latandre",
            },
            {
              key: "name",
              value: "Op. Macabre",
            },
            {
              key: "name",
              value: "Op. Potrando",
            },
          ],
        },
      ],
    },
    {
      title: "Entity",
      fields: [
        {
          options: [
            {
              key: "entity",
              value: "Renault Brjoisoi",
            },
            {
              key: "entity",
              value: "Renault HQ",
            },
            {
              key: "entity",
              value: "Renault Codasda",
            },
          ],
        },
        {
          options: [
            {
              key: "entity",
              value: "Renault Brjoisoi",
            },
            {
              key: "entity",
              value: "Renault HQ",
            },
            {
              key: "entity",
              value: "Renault Codasda",
            },
          ],
        },
        {
          options: [
            {
              key: "entity",
              value: "Renault Brjoisoi",
            },
            {
              key: "entity",
              value: "Renault HQ",
            },
            {
              key: "entity",
              value: "Renault Codasda",
            },
          ],
        },
      ],
    },
    {
      title: "Location",
      fields: [
        {
          options: [
            {
              key: "location",
              value: "France",
            },
            {
              key: "location",
              value: "USA",
            },
            {
              key: "location",
              value: "Italia",
            },
          ],
        },
        {
          options: [
            {
              key: "location",
              value: "USA",
            },
            {
              key: "location",
              value: "France",
            },
            {
              key: "location",
              value: "Italia",
            },
          ],
        },
        {
          options: [
            {
              key: "location",
              value: "Italia",
            },
            {
              key: "location",
              value: "USA",
            },
            {
              key: "location",
              value: "France",
            },
          ],
        },
      ],
    },
    {
      title: "Expertise",
      fields: [
        {
          options: [
            {
              key: "expertise11",
              value: "#Tax",
            },
            {
              key: "expertise12",
              value: "#M&A",
            },
            {
              key: "expertise13",
              value: "#Social",
            },
          ],
        },
        {
          options: [
            {
              key: "expertise21",
              value: "#M&A",
            },
            {
              key: "expertise22",
              value: "#Tax",
            },
            {
              key: "expertise23",
              value: "#Social",
            },
          ],
        },
        {
          options: [
            {
              key: "expertise31",
              value: "#Social",
            },
            {
              key: "expertise32",
              value: "#Tax",
            },
            {
              key: "expertise33",
              value: "#M&A",
            },
          ],
        },
      ],
    },
    {
      title: "Date",
      fields: [
        {
          options: [
            {
              key: "date",
              value: "",
            },
          ],
        },
        {
          options: [
            {
              key: "date",
              value: "",
            },
          ],
        },
        {
          options: [
            {
              key: "date",
              value: "",
            },
          ],
        },
      ],
    },
    {
      title: "Firm",
      fields: [
        {
          options: [
            {
              key: "firm",
              value: "Racine",
            },
            {
              key: "firm",
              value: "Clifford chance",
            },
            {
              key: "firm",
              value: "SVZ",
            },
          ],
        },
        {
          options: [
            {
              key: "firm",
              value: "Clifford chance",
            },
            {
              key: "firm",
              value: "SVZ",
            },
            {
              key: "firm",
              value: "Racine",
            },
          ],
        },
        {
          options: [
            {
              key: "firm",
              value: "SVZ",
            },
            {
              key: "firm",
              value: "Racine",
            },
            {
              key: "firm",
              value: "Clifford chance",
            },
          ],
        },
      ],
    },
  ];

  export default proposals;