import { ICategories } from "./Categories";

export const categories: ICategories[] = [
    {
      fields: [
        {
          options: [
            {
              key: "category1",
              value: "Mergers and aquisition",
            },
            {
              key: "category2",
              value: "Some other stuff",
            },
          ],
        },
      ],
    },
    {
      title: "Specialities",
      fields: [
        {
          options: [
            {
              key: "specialities",
              value: "Cross border operation",
            },
            {
              key: "specialities",
              value: "Other operations",
            },
          ],
        },
        {
          options: [
            {
              key: "specialities",
              value: "Transaction over 500M€/$",
            },
            {
              key: "specialities",
              value: "Transaction under 250M€/$",
            },
          ],
        },
      ],
    },
    {
      title: "Admission to practice law",
      fields: [
        {
          options: [
            {
              key: "admission",
              value: "Paris bar association",
            },
            {
              key: "admission",
              value: "London bar association",
            },
          ],
        },
        {
          options: [
            {
              key: "admission",
              value: "Tunisian bar association",
            },
            {
              key: "admission",
              value: "Spanish bar association",
            },
          ],
        },
      ],
    },
    {
      title: "Counties",
      fields: [
        {
          options: [
            {
              key: "counties",
              value: "Tunisia",
            },
            {
              key: "counties",
              value: "Germany",
            },
          ],
        },
      ],
    },
  ];