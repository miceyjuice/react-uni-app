import React, { FC } from "react";
import { Category } from "../Categories/CategoriesStyle";
import { CustomBox } from "../InternalReviews/InternalReviews";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import {
  Column,
  ColumnTitle,
  FieldOption,
  DateField,
  SectionLink,
  InfoBox,
} from "../Proposals/ProposalsStyle";
import { IReviews } from "../InternalReviews/InternalReviews";
import styled from "styled-components";
import { IFormikValues } from "../Profile";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";

const getYears = (): string[] => {
  let years = [];

  for (let i = 1990; i < new Date().getFullYear(); i++) {
    years.push(i.toString());
  }
  return years;
};

const FeeBox = styled(InfoBox)`
  grid-template-columns: repeat(4, 1fr);
`;

const fees: IReviews[] = [
  {
    title: "Year",
    fields: [
      {
        options: [
          {
            key: "year",
            value: 1998,
          },
          {
            key: "year",
            value: 2005,
          },
          {
            key: "year",
            value: 2017,
          },
        ],
      },
      {
        options: [
          {
            key: "year",
            value: 2001,
          },
          {
            key: "year",
            value: 2005,
          },
          {
            key: "year",
            value: 2017,
          },
        ],
      },
      {
        options: [
          {
            key: "year",
            value: 2009,
          },
          {
            key: "year",
            value: 2005,
          },
          {
            key: "year",
            value: 2010,
          },
        ],
      },
    ],
  },
  {
    title: "Cost center",
    fields: [
      {
        options: [
          {
            key: "cost",
            value: "CS 153",
          },
          {
            key: "cost",
            value: "CS 153",
          },
          {
            key: "cost",
            value: "CS 47",
          },
        ],
      },
      {
        options: [
          {
            key: "cost",
            value: "CS 47",
          },
          {
            key: "cost",
            value: "CS 153",
          },
          {
            key: "cost",
            value: "CS 47",
          },
        ],
      },
      {
        options: [
          {
            key: "cost",
            value: "CS 188",
          },
          {
            key: "cost",
            value: "CS 153",
          },
          {
            key: "cost",
            value: "CS 47",
          },
        ],
      },
    ],
  },
  {
    title: "Total amount",
    fields: [
      {
        options: [
          {
            key: "totalAmount",
            value: "3500 €",
          },
          {
            key: "totalAmount",
            value: "9500 €",
          },
          {
            key: "totalAmount",
            value: "10500 €",
          },
        ],
      },
      {
        options: [
          {
            key: "totalAmount",
            value: "17000 €",
          },
          {
            key: "totalAmount",
            value: "9500 €",
          },
          {
            key: "totalAmount",
            value: "10500 €",
          },
        ],
      },
      {
        options: [
          {
            key: "totalAmount",
            value: "20500 €",
          },
          {
            key: "totalAmount",
            value: "9500 €",
          },
          {
            key: "totalAmount",
            value: "10500 €",
          },
        ],
      },
    ],
  },
  {
    title: "Law firm",
    fields: [
      {
        options: [
          {
            key: "lawFirm",
            value: "Clifford chance",
          },
          {
            key: "lawFirm",
            value: "Linklaters",
          },
          {
            key: "lawFirm",
            value: "Bigmatters",
          },
        ],
      },
      {
        options: [
          {
            key: "lawFirm",
            value: "Linklaters",
          },
          {
            key: "lawFirm",
            value: "Bigmatters",
          },
          {
            key: "lawFirm",
            value: "Clifford chance",
          },
        ],
      },
      {
        options: [
          {
            key: "lawFirm",
            value: "Bigmatters",
          },
          {
            key: "lawFirm",
            value: "Linklaters",
          },
          {
            key: "lawFirm",
            value: "Clifford chance",
          },
        ],
      },
    ],
  },
];

export const FeeAmount: FC<IFormikValues & IUpdateProps> = ({
  values,
  isUpdating,
}) => {
  return (
    <PanelWrapper>
      <SectionTitle>Amount of fees</SectionTitle>
      <FeeBox>
        {fees.map((fee) => (
          <Column>
            <ColumnTitle>{fee.title}</ColumnTitle>
            {fee.fields.map((field, index) => (
              <Category
                component="select"
                name={`feeAmount.${field.options[index].key}.${index}`}
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
            ))}
          </Column>
        ))}
      </FeeBox>
      <SectionLink>See more fees</SectionLink>
    </PanelWrapper>
  );
};

export default FeeAmount;
