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
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import fees from "./FeesArray";
import { FeeBox } from "./FeeAmountStyle";
import { IFormikValues } from "../StartingData";



export const FeeAmount: FC<IFormikValues & IUpdateProps> = ({
  values,
  isUpdating,
}) => {
  return (
    <PanelWrapper>
      <SectionTitle>Amount of fees</SectionTitle>
      <FeeBox>
        {fees.map((fee, feeIdx) => (
          <Column key={fee.title.toLowerCase().replaceAll(' ', '') + feeIdx}>
            <ColumnTitle>{fee.title}</ColumnTitle>
            {fee.fields.map((field, fieldIdx) => (
              <Category
                component="select"
                name={`feeAmount.${field.options[fieldIdx].key}.${fieldIdx}`}
                disabled={!isUpdating}
                key={`field${fieldIdx}`}
              >
                {field.options.map((option, optionIdx) => (
                  <FieldOption
                    as="option"
                    key={option.key + optionIdx}
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
