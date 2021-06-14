import React, { ChangeEvent, FC, useState } from "react";
import { IField } from "../Categories/Categories";
import { Category } from "../Categories/CategoriesStyle";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import {
  Column,
  ColumnTitle,
  FieldOption,
  DateField,
  SectionLink,
} from "../Proposals/ProposalsStyle";
import proposals from "../Proposals/ProposalsArray";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import { CustomBox } from "./InternalReviewsStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import { IFormikValues } from "../StartingData";

export interface IReviews {
  title: string;
  fields: IField[];
}

const reviews: IReviews[] = proposals.slice(0, proposals.length - 1);

export const InternalReviews: FC<IFormikValues & IUpdateProps> = ({
  values,
  isUpdating,
}) => {
  const [dateValue, setDateValue] = useState<string[]>([
    "2010-05-19",
    "2010-05-19",
    "2010-05-19",
  ]);

  return (
    <PanelWrapper>
      <SectionTitle>Internal reviews</SectionTitle>
      <CustomBox>
        {reviews.map((review, idx) => (
          <Column key={review.title.toLowerCase().replaceAll(" ", "") + idx}>
            <ColumnTitle>{review.title}</ColumnTitle>
            {review.title !== "Date"
              ? review.fields.map((field, index) => (
                  <Category
                    component="select"
                    name={`internalReviews.${field.options[index].key}.${index}`}
                    disabled={!isUpdating}
                    key={`category${index}`}
                  >
                    {field.options.map((option, optionIdx) => (
                      <FieldOption as="option" key={option.key + optionIdx}>
                        {option.value}
                      </FieldOption>
                    ))}
                  </Category>
                ))
              : review.fields.map((field, idx) =>
                  field.options.map((option) => (
                    <DateField
                      component="input"
                      type="date"
                      name={`proposals.${option}.${idx}`}
                      disabled={!isUpdating}
                      value={dateValue[idx]}
                      key={option.key + idx}
                      onChange={(event: ChangeEvent<HTMLDataElement>) => {
                        let newArr = [...dateValue];
                        newArr[idx] = event.target.value;
                        setDateValue(newArr);
                      }}
                    ></DateField>
                  ))
                )}
          </Column>
        ))}
      </CustomBox>
      <SectionLink>See more reviews</SectionLink>
    </PanelWrapper>
  );
};

export default InternalReviews;
