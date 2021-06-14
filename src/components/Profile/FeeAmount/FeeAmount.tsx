import React, { FC } from "react";
import { Category } from "../Categories/CategoriesStyle";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import {
  Column,
  ColumnTitle,
  FieldOption,
  DateField,
  SectionLink,
  InfoBox,
} from "../Proposals/ProposalsStyle";
import { IFormikValues } from "../Profile";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import fees from "./FeesArray";
import { FeeBox } from "./FeeAmountStyle";



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
