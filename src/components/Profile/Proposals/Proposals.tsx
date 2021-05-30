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
import { IFormikValues } from "../Profile";
import { Field } from "formik";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";

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

export const Proposals: FC<IFormikValues & IUpdateProps> = ({ values, handleChange, isUpdating }) => {
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
                  <Category
                    component="select"
                    name={`proposals.${field.options[index].key}.${index}`}
                    disabled={!isUpdating}
                  >
                    {field.options.map((option) => (
                      <FieldOption
                        as="option"
                        key={option.key + Math.trunc(Math.random() * 150)}
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
                        component="input"
                        type="date"
                        name={`proposals.${option.key}.${index}`}
                        disabled={!isUpdating}
                        value={dateValue[index]}
                        key={option.key + Math.trunc(Math.random() * 150)}
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
