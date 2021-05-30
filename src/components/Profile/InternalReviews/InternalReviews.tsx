import React, { FC } from "react";
import styled from "styled-components";
import { IField } from "../Categories/Categories";
import { Category } from "../Categories/CategoriesStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import { IFormikValues } from "../Profile";
import {
  InfoBox,
  Column,
  ColumnTitle,
  FieldOption,
  DateField,
  SectionLink,
} from "../Proposals/ProposalsStyle";
import { proposals } from "../Proposals/Proposals";

export const CustomBox = styled(InfoBox)`
  grid-template-columns: repeat(5, 1fr);
`;

export interface IReviews {
  title: string;
  fields: IField[];
}

const reviews: IReviews[] = proposals.slice(0, proposals.length - 1);

console.log(reviews);

export const InternalReviews: FC<IFormikValues> = ({ values }) => {
  return (
    <PanelWrapper>
      <SectionTitle>Internal reviews</SectionTitle>
      <CustomBox>
        {reviews.map((review) => (
          <Column>
            <ColumnTitle>{review.title}</ColumnTitle>
            {review.title !== "Date"
              ? review.fields.map((field, index) => (
                  <Category
                    component="select"
                    name={`internalReviews.${field.options[index].key}.${index}`}
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
              : review.fields.map(() => <DateField type="date"></DateField>)}
          </Column>
        ))}
      </CustomBox>
      <SectionLink>See more reviews</SectionLink>
    </PanelWrapper>
  );
};

export default InternalReviews;
