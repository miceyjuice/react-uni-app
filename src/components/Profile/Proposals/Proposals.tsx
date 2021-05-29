import React, { ChangeEvent, FC, useState } from "react";
import { Category } from "../Categories/CategoriesStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import {
  Column,
  ColumnTitle,
  DateField,
  FieldOption,
  InfoBox,
  SectionLink,
} from "./ProposalsStyle";
import { IField } from "../Categories/Categories";

interface IProposals {
  title: string;
  fields: IField[];
}

const proposals: IProposals[] = [
  {
    title: "Name",
    fields: [
      {
        options: [
          {
            key: "name1",
            value: "Operation m50",
          },
          {
            key: "name1",
            value: "Operation m51",
          },
          {
            key: "name1",
            value: "Operation m52",
          },
        ],
      },
      {
        options: [
          {
            key: "name2",
            value: "Operation bondi",
          },
          {
            key: "name2",
            value: "Operation mondi",
          },
          {
            key: "name2",
            value: "Operation tondi",
          },
        ],
      },
      {
        options: [
          {
            key: "name3",
            value: "Op. Latandre",
          },
          {
            key: "name3",
            value: "Op. Macabre",
          },
          {
            key: "name3",
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
            key: "entity1",
            value: "Renault Brjoisoi",
          },
          {
            key: "entity1",
            value: "Renault HQ",
          },
          {
            key: "entity1",
            value: "Renault Codasda",
          },
        ],
      },
      {
        options: [
          {
            key: "entity2",
            value: "Renault Brjoisoi",
          },
          {
            key: "entity2",
            value: "Renault HQ",
          },
          {
            key: "entity2",
            value: "Renault Codasda",
          },
        ],
      },
      {
        options: [
          {
            key: "entity3",
            value: "Renault Brjoisoi",
          },
          {
            key: "entity3",
            value: "Renault HQ",
          },
          {
            key: "entity3",
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
            key: "location1",
            value: "France",
          },
          {
            key: "location1",
            value: "USA",
          },
          {
            key: "location1",
            value: "Italia",
          },
        ],
      },
      {
        options: [
          {
            key: "location2",
            value: "USA",
          },
          {
            key: "location2",
            value: "France",
          },
          {
            key: "location2",
            value: "Italia",
          },
        ],
      },
      {
        options: [
          {
            key: "location3",
            value: "Italia",
          },
          {
            key: "location3",
            value: "USA",
          },
          {
            key: "location3",
            value: "France",
          },
        ],
      },
    ],
  },
  {
    title: "Expertise",
    // fields: ["#Tax", "#M&A", "#Social"],
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
            key: "date1",
            value: "",
          },
        ],
      },
      {
        options: [
          {
            key: "date2",
            value: "",
          },
        ],
      },
      {
        options: [
          {
            key: "date3",
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
            key: "firm11",
            value: "Racine",
          },
          {
            key: "firm12",
            value: "Clifford chance",
          },
          {
            key: "firm13",
            value: "SVZ",
          },
        ],
      },
      {
        options: [
          {
            key: "firm21",
            value: "Clifford chance",
          },
          {
            key: "firm22",
            value: "SVZ",
          },
          {
            key: "firm22",
            value: "Racine",
          },
        ],
      },
      {
        options: [
          {
            key: "firm31",
            value: "SVZ",
          },
          {
            key: "firm32",
            value: "Racine",
          },
          {
            key: "firm33",
            value: "Clifford chance",
          },
        ],
      },
    ],
  },
];

export const Proposals: FC = () => {
  const [dateValue, setDateValue] = useState<string[]>([
    "2010-05-19",
    "2010-05-19",
    "2010-05-19",
  ]);

  return (
    <PanelWrapper>
      <SectionTitle>Proposals</SectionTitle>
      <InfoBox>
        {proposals.map((proposal) => (
          <Column>
            <ColumnTitle>{proposal.title}</ColumnTitle>
            {proposal.title !== "Date"
              ? proposal.fields.map((field, index) => (
                  <Category as="select" name={field.options[index].key}>
                    {field.options.map((option) => (
                      <FieldOption
                        as="option"
                        key={option.key}
                      >
                        {option.value}
                      </FieldOption>
                    ))}
                  </Category>
                ))
              : proposal.fields.map((element, index) =>
                  element.options.map((option) => (
                    <>
                      <DateField
                        type="date"
                        name={option.key}
                        value={dateValue[index]}
                        key={option.key}
                        onChange={(event: ChangeEvent<HTMLDataElement>) => {
                          let newArr = [...dateValue];
                          newArr[index] = event.target.value;
                          setDateValue(newArr);
                        }}
                      />
                    </>
                  ))
                )}
          </Column>
        ))}
      </InfoBox>
      <SectionLink>See more proposals</SectionLink>
    </PanelWrapper>
  );
};

export default Proposals;
