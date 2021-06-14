import React, { ChangeEvent, FC, useState } from "react";
import { Category } from "../Categories/CategoriesStyle";
import { SectionTitle } from "../PanelInformations/PanelInformationsStyle";
import { PanelWrapper } from "../PanelInformations/PanelInformations";
import {
  Column,
  ColumnTitle,
  DateField,
  FieldOption,
  InfoBox,
  SectionLink,
} from "./ProposalsStyle";
import { IFormikValues } from "../Profile";
import { IUpdateProps } from "../PersonalInfo/PersonalInfo";
import proposals from "./ProposalsArray";


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
