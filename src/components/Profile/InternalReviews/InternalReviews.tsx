import React, { FC } from "react";
import styled from "styled-components";
import { Category } from "../Categories/CategoriesStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import { InfoBox, Column, ColumnTitle, FieldOption, DateField, SectionLink } from "../Proposals/ProposalsStyle";

export const CustomBox = styled(InfoBox)`
    grid-template-columns: repeat(5, 1fr);
`;

export interface IReviews {
    title: string;
    elements: string[];
  }

const reviews: IReviews[] = [
    {
      title: "Name",
      elements: ["Operation m50", "Operation botox", "Op. Latandre"],
    },
    {
      title: "Entity",
      elements: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
    },
    {
      title: "Location",
      elements: ["France", "USA", "Italia"],
    },
    {
      title: "Expertise",
      elements: ["#Tax", "#M&A", "#Social"],
    },
    {
      title: "Date",
      elements: ["dsds", "USA", "Italia"],
    },
  ];

export const InternalReviews: FC = () => {
  return (
    <PanelWrapper>
      <SectionTitle>Internal reviews</SectionTitle>
      <CustomBox>
        {reviews.map((review) => (
          <Column>
            <ColumnTitle>{review.title}</ColumnTitle>
            {review.title !== "Date"
              ? review.elements.map((element, index) => (
                  <Category as="select">
                    <FieldOption
                      as="option"
                      value={review.title.toLowerCase() + (index + 1)}
                    >
                      {element}
                    </FieldOption>
                  </Category>
                ))
              : review.elements.map(() => (
                  <DateField type="date"></DateField>
                ))}
          </Column>
        ))}
      </CustomBox>
      <SectionLink>See more reviews</SectionLink>
    </PanelWrapper>
  );
};

export default InternalReviews;
