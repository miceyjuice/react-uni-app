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
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import { CustomBox } from "./InternalReviewsStyle";


export interface IReviews {
  title: string;
  fields: IField[];
}

const reviews: IReviews[] = proposals.slice(0, proposals.length - 1);

export const InternalReviews: FC<IFormikValues & IUpdateProps> = ({
  values,
  isUpdating,
}) => {
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
              : review.fields.map(() => (
                  <DateField type="date" disabled={!isUpdating}></DateField>
                ))}
          </Column>
        ))}
      </CustomBox>
      <SectionLink>See more reviews</SectionLink>
    </PanelWrapper>
  );
};

export default InternalReviews;
